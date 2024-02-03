import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { verify } from 'jsonwebtoken';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    if (!createPostDto.token) {
      return;
    }
    const idObj = verify(createPostDto.token, 'qwerty');
    const { id } = JSON.parse(JSON.stringify(idObj));
    if (!id) {
      return new HttpException('Bad Request', 400);
    }
    return await this.postsService.create(createPostDto, id);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/findOne/:id')
  async findOneById(@Param('id') id: number) {
    if (!id) return new HttpException('Bad Request', 400);
    return await this.postsService.findOne(+id);
  }

  @Post('/findOne')
  async findOne(@Body('token') token: string) {
    const idObj = verify(token, 'qwerty');
    const { id } = JSON.parse(JSON.stringify(idObj));
    if (!id) {
      return new HttpException('Bad Request', 400);
    }
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postsService.remove(+id);
  }

  @Post('/like')
  async tooglelike(
    @Body('userId') userId: number,
    @Body('postId') postId: number,
  ) {
    return await this.postsService.toogleLike(userId, postId);
  }

  @Get('/post/:id')
  async getPost(@Param('id') id: string) {
    return await this.postsService.findPost(+id);
  }

  @Get('/likes/:id')
  async getLikes(@Param('id') id: string) {
    return await this.postsService.getLikes(+id);
  }
}
