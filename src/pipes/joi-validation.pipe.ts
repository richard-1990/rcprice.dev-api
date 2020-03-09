import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Schema } from '@hapi/joi';
import { join } from 'path';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') {
      return value;
    }
    const { error } = this.schema.validate(value, {
      abortEarly: false,
      allowUnknown: false,
    });
    if (error) {
      throw new BadRequestException(error.details);
    }
    return value;
  }
}
