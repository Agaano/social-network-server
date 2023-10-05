import { Controller, Get, Param } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}
	@Get('/:id')
	async getUser(@Param('id') id: number) {
		if (!(Number(id))) {
			return new HttpException('Bad Request', 400);
		}
		const user = await this.userService.findUser(id);
		if (!user) {
			return new HttpException('Not Found', 404);
		}
		user.password = ''
		return user;
	}
}
