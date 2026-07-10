import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  // Service inject kortesi
  constructor(
    private readonly productsService: ProductsService,
  ) {}

  // Sob product dekhabe
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  // Notun product add korbe
  @Post()
  addProduct(@Body() product: CreateProductDto) {
    return this.productsService.addProduct(product);
  }

  // ID diye ekta product dekhabe
  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }

  // Product update korbe
  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }


  // Product er kichu field update korbo
@Patch(':id')
patchProduct(
  @Param('id') id: number,
  @Body() product: UpdateProductDto,
) {
  return this.productsService.patchProduct(id, product);
}

  // Product delete korbe
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }

}