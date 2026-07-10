import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// PATCH er jonno shob field optional
export class PartialUpdateProductDto extends PartialType(
  CreateProductDto,
) {}