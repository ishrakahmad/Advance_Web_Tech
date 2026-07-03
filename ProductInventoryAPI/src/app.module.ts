import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // PostgreSQL database connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'macbookairm1',
      password: '',
      database: 'product_inventory_db',

      // Shob entity automatic detect korbe
      autoLoadEntities: true,

      // Development e table automatic create/update korbe
      synchronize: true,
    }),

    // Products module import korchi
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}