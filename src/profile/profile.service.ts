import { Injectable } from '@nestjs/common'
import { writeFileSync } from 'fs'
import { PrismaService } from 'src/prisma.service'
import { ChangeUsernameDTO } from './dto/changeUsername.dto'


@Injectable()
export class ProfileService {
	constructor(private prisma: PrismaService) {}

	async changeUsername(data: ChangeUsernameDTO) {
		return await this.prisma.user.update({where: {id: Number(data.id)}, data: {username: data.username}})
	}

	async upload(file: Express.Multer.File, id: number) {
		const filename = `${Date.now()}-${file.originalname}`;
		const fileStream = file.buffer;
		const filePath = await writeFileSync(`./uploads/avatars/${filename}`, fileStream);
		return {
			filename,
			filePath
		};
	}

}
