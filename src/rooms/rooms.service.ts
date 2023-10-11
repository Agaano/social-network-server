import { Injectable } from '@nestjs/common'

@Injectable()
export class RoomsService {

  findAll() {
    return `This action returns all rooms`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
