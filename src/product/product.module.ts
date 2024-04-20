import { Module } from '@nestjs/common';
import { ProductModel, ProductSchema } from './product.shema';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';

@Module({
 controllers: [ProductController],
 imports: [
  MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }]),
  MulterModule.register({
   fileFilter: (_, file, cb) => {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, true);
   },
  }),
 ],
 providers: [ProductService],
})
export class ProductModule {}
