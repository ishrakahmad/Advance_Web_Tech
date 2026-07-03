import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  // Product entity er repository inject kortesi
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Sob product fetch korbe
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Single product add korbe
  async addProduct(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }
}