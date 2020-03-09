import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: string): Promise<Post> {
    return this.postRepository.findOne(id);
  }

  async create(post: Post): Promise<any> {
    try {
      return await this.postRepository.save({ ...post });
    } catch (e) {
      return e;
    }
  }

  async update(id: string, post: Post): Promise<Post> {
    await this.postRepository.update(id, post);
    return this.postRepository.findOne(id);
  }

  async delete(id: string): Promise<string> {
    await this.postRepository.softDelete(id);
    return 'Post successfully deleted';
  }
}
