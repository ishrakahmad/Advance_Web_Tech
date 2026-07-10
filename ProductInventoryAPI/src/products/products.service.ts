import { Injectable,  NotFoundException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
  async getProductById(id: number): Promise<Product> {

    const product = await this.productRepository.findOne({
      where: { id },
    });
  
    if (!product) {
      throw new NotFoundException(
        `Product with ID ${id} not found`,
      );
    }
  
    return product;
  }
  // Product update korbe
  async updateProduct(
    id: number,
    product: UpdateProductDto,
  ): Promise<Product> {
  
    await this.getProductById(id);
  
    await this.productRepository.update(id, product);
  
    return await this.getProductById(id);
  

    // Age product update korchi
    await this.productRepository.update(id, product);

    // Tarpor updated product return korchi
    return await this.getProductById(id);
  }


  // Product er kichu field update korchi
  async patchProduct(
    id: number,
    product: UpdateProductDto,
  ): Promise<Product> {
  
    await this.getProductById(id);
  
    await this.productRepository.update(id, product);
  
    return await this.getProductById(id);
  }

   // Name diye product search korbo


async searchProducts(name: string): Promise<Product[]> {
   return await this.productRepository
    .createQueryBuilder('product')
    .where('LOWER(product.name) LIKE LOWER(:name)', {
      name: `%${name}%`,
    })
    .getMany();
}



// Category diye product filter korbo
async findByCategory(
  category: string,
): Promise<Product[]> {

  return await this.productRepository.find({
    where: {
      category,
    },
  });
}




// Product active/inactive toggle korbo
async toggleActive(id: number): Promise<Product> {

  // Age product khuje ber korchi
  const product = await this.getProductById(id);

  // Active value ulta kore dicchi
  product.isActive = !product.isActive;

  // Database e save korchi
  return await this.productRepository.save(product);
}




  // Product delete korbe
  async deleteProduct(id: number) {

    await this.getProductById(id);
  
    await this.productRepository.delete(id);
  
    return {
      message: 'Product deleted successfully',
    };
  }
}