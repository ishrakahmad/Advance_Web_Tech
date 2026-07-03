import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {

  // Service inject kortesi
  constructor(private readonly productsService: ProductsService) {}

  // Sob product dekhabe
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  // Notun product add korbe
  @Post()
  addProduct(@Body() product: Product) {
    return this.productsService.addProduct(product);
  }
}