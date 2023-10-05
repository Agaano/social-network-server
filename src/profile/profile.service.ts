import { Injectable } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'
import { unlink, writeFileSync } from 'fs'
import { contentType } from 'mime-types'
import { PrismaService } from '../prisma.service'
import { ChangeUsernameDTO } from './dto/changeUsername.dto'

@Injectable()
export class ProfileService {
	constructor(private prisma: PrismaService) {}

	async changeUsername(data: ChangeUsernameDTO) {
		return await this.prisma.user.update({where: {id: Number(data.id)}, data: {username: data.username}})
	}

	async upload(file: Express.Multer.File, id: number) {
		const supportedTypes = ['image/png' , 'image/jpeg'];
		if (supportedTypes.includes(contentType(file.originalname).toString()) === false) {
			return new HttpException('Unsupported format', 415);
		}
		
		const user = await this.prisma.user.findUnique({where: {id: Number(id)}});
		if (user.avatar !== null) {
			const userAvatarUrl = new URL(user.avatar);
			const userAvatarName = userAvatarUrl.pathname.split('/')[2];
			unlink(`./uploads/avatars/${userAvatarName}`, (err)=> {
				if (err) {
					console.log(err)
				} else console.log(`Файл ${userAvatarName} успешно удалён`)
			})
		}

		const filename = `${Date.now()}-${file.originalname}`;
		const fileStream = file.buffer;
		await writeFileSync(`./uploads/avatars/${filename}`, fileStream);
		const filepath = `http://localhost:8000/files/${filename}`;
		await this.prisma.user.update({where: {id: Number(id)}, data: {avatar: filepath}})
		return {
			filename,
			filepath
		};
	}
}
