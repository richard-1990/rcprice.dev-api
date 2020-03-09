import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UsePipes,
  Patch,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import postSchema from './post.schema';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(postSchema.POST))
  async postPost(@Body() post: any) {
    try {
      return await this.postService.create(post);
    } catch (e) {
      return 'shit';
    }
  }

  @Patch(':id')
  @UsePipes(new JoiValidationPipe(postSchema.PATCH))
  patchPost(@Body() post: any, @Param('id') id) {
    try {
      return this.postService.update(id, post);
    } catch (e) {
      return 'shit';
    }
  }

  @Delete(':id')
  deletePost(@Param('id') id): Promise<string> {
    return this.postService.delete(id);
  }
}
