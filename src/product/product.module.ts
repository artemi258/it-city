import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './product.shema';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
 controllers: [ProductController],
 imports: [MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }])],
 providers: [ProductService],
})
export class ProductModule {}
