import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { contentType } from 'mime-types';
import { unlink, writeFileSync } from 'fs';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findPost(id: number) {
    return await this.prisma.post.findUnique({
      where: { id: id },
      include: { user: true },
    });
  }

  async create(createPostDto: CreatePostDto, id: number) {
    const user = await this.prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return new HttpException('Not Found', 404);
    }

    const post = await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        text: createPostDto.text,
        userId: id,
        image: createPostDto.image
      },
    });
    return post;
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    const posts = await this.prisma.post.findMany({
      where: { userId: id },
      select: { id: true },
    });
    return posts;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    const post = await this.prisma.post.delete({ where: { id: id } });
    await this.prisma.rating.deleteMany({ where: { postId: id } });
    return post;
  }

  async toogleLike(userId: number, postId: number) {
    const like = await this.prisma.rating.findFirst({
      where: { userId: userId, postId: postId },
      select: { id: true },
    });
    if (!!like) {
      const oldLike = await this.prisma.rating.delete({
        where: { id: like.id },
      });
      return oldLike;
    }
    const newLike = await this.prisma.rating.create({
      data: {
        userId: userId,
        postId: postId,
        type: 'Like',
      },
    });
    return newLike;
  }

  async getLikes(id: number) {
    const likes = await this.prisma.rating.findMany({
      where: { postId: id },
      select: { userId: true },
    });
    return likes;
  }


  async upload(file: Express.Multer.File) {
    const supportedTypes = ['image/png', 'image/jpeg'];
    if (
      supportedTypes.includes(contentType(file.originalname).toString()) ===
      false
    ) {
      return new HttpException('Unsupported format', 415);
    }
    const filename = `${Date.now()}-${file.originalname}`;
    const fileStream = file.buffer;
    writeFileSync('./uploads/avatars/' + filename, fileStream);
    const filepath = `/files/${filename}`;
    return {
      filename,
      filepath,
    };
  }
}
