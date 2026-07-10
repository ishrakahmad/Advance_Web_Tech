import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// CreateProductDto er shob field optional kore Update DTO banacchi
export class UpdateProductDto extends PartialType(CreateProductDto) {}