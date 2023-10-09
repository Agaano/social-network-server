import { Controller, Get, Param } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}
	@Get('/:id')
	async getUser(@Param('id') id: string) {
		const user = !(Number(id)) ? await this.userService.findUserByLink(id) : await this.userService.findUser(Number(id));
		if (!user) {
			return new HttpException('Not Found', 404);
		}
		user.password = ''
		return user;
	}
}
