import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min,
  } from 'class-validator';
  
  export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsNumber()
    @Min(1)
    price: number;
  
    @IsNumber()
    @Min(0)
    stock: number;
  
    @IsString()
    @IsNotEmpty()
    category: string;
  
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
  }