import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

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

  // DTO theke product database e save korchi
async addProduct(
  product: CreateProductDto,
): Promise<Product> {
  return await this.productRepository.save(product);
}

  // ID diye ekta product khuje ber korbe
  async getProductById(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({
      where: { id },
    });
  }

  // Product update korbe
  async updateProduct(
    id: number,
    product: Product,
  ): Promise<Product | null> {

    // Age product update korchi
    await this.productRepository.update(id, product);

    // Tarpor updated product return korchi
    return await this.getProductById(id);
  }

  // Product delete korbe
  async deleteProduct(id: number) {

    // Database theke product delete korchi
    await this.productRepository.delete(id);

    return {
      message: 'Product deleted successfully',
    };
  }

}