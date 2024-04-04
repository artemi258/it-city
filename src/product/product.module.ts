import { Module } from '@nestjs/common';
import { ProductModel, ProductSchema } from './product.shema';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
 controllers: [ProductController],
 imports: [MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }])],
 providers: [ProductService],
})
export class ProductModule {}
