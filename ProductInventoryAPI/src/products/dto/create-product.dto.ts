import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

  // Product er name empty hote parbe na
  @IsString()
  @IsNotEmpty()
  productName: string;

  // Brand er name empty hote parbe na
  @IsString()
  @IsNotEmpty()
  brand: string;

  // Price number hote hobe
  @IsNumber()
  price: number;

  // Quantity number hote hobe
  @IsNumber()
  quantity: number;

}