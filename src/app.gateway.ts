import { OnGatewayInit, WebSocketGateway } from '@nestjs/websockets'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketServer } from '@nestjs/websockets/decorators'
import { Server, Socket } from 'socket.io'
import { PrismaService } from './prisma.service'
class IMessage {
	user: number
	message: string
	lobby: string
}

class EnteringLobbyInfo {
	user: number
	lobby: number
}

class CreateLobbyInfo {
	user: number
	friend: number
}

@WebSocketGateway({
	namespace: 'chat',
	cors: true,
})
export class AppGateway implements OnGatewayInit {
	constructor(private prisma: PrismaService) {}
	@WebSocketServer()
	server: Server;

	private async getMembers(roomId) {
		const members = await this.prisma.user.findMany({where: {membership: {some: {roomId: roomId}}}});
		return members;
	}

	private async validateData(userId, roomId) {
		if (Number.isNaN(Number(roomId))) return
		const user = await this.prisma.user.findUnique({where: {id: Number(userId)}});
		if (!user) return;
		const room = await this.prisma.room.findUnique({where: {id: Number(roomId)}})
		if (!room) return
		const memberships = await this.prisma.membership.findFirst({where:{userId: user.id, roomId: room.id}});
		if (!memberships) return;
		
		return {
			user,
			room
		}
	}

	private checkIsInThisRoom(client: Socket, lobby: string) {
		let isInThisRoom = false;
		client.rooms.forEach((room) => {
			if (room === lobby) isInThisRoom = true;
		})
		return isInThisRoom;
	}

	@SubscribeMessage('message')
	async handleMessage(@ConnectedSocket() client: Socket, @MessageBody() message: IMessage) {
		if (!this.checkIsInThisRoom(client, message.lobby.toString())) return;
		const validatedData = await this.validateData(message.user, message.lobby);
		if (!validatedData) return;
		const createdMessage = await this.prisma.message.create({data: {
			roomId: validatedData.room.id,
			userId: validatedData.user.id,
			content: message.message
		}, include: {
			user: true,
		}})
		this.server.in(message.lobby.toString()).emit('message', createdMessage)
	}

	// @SubscribeMessage('activeRooms') 
	// handleCheck(@ConnectedSocket() client: Socket) {
	// 	client.rooms.forEach((room) => {
	// 		client.emit('message', room);
	// 	})
	// }

	@SubscribeMessage('joinTheRoom') 
  async	handleJoin(@ConnectedSocket() client: Socket, @MessageBody() lobby: EnteringLobbyInfo) {
		const validatedData = await this.validateData(lobby.user, lobby.lobby);
		if (this.checkIsInThisRoom(client, lobby.lobby.toString())) return;
		if (!validatedData) return;
		const messages = await this.prisma.message.findMany({where: {roomId: validatedData.room.id}, take: 20, include: {user: true}})
		console.log(validatedData.user.username + ' have just joined lobby ' + '"' + validatedData.room.name + '"')
		client.join(lobby.lobby.toString())
		const members = this.getMembers(validatedData.room.id);
		client.emit('create-the-room', {
			id: validatedData.room.id,
			name: validatedData.room.name,
			messages: messages,
			members: members
		});
	}

	@SubscribeMessage('createTheRoom') 
	async handleCreate(@ConnectedSocket() client: Socket, @MessageBody() lobby: CreateLobbyInfo) {
		const firstUser = await this.prisma.user.findUnique({where: {id: Number(lobby.user)}})
		const secondUser = await this.prisma.user.findUnique({where: {id: Number(lobby.friend)}})
		if (!firstUser || !secondUser) return;
		const newLobby = await this.prisma.room.create({data: {
			name: firstUser.username + ' ' + secondUser.username,
			membership: {
				create: [
					{userId: firstUser.id},
					{userId: secondUser.id}
				]
			}
		}})
		client.emit('message', newLobby);
	}

	@SubscribeMessage('connection') 
	handleConnection(@ConnectedSocket() client: Socket) {
		console.log(client.id + 'connection');
	}
	
	afterInit(server: any) {
		console.log('WebSocket Initialized')
	}
}