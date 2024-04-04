import { Prop } from '@nestjs/mongoose';

export class ServiceCategory {
 @Prop()
 latin?: string;
 @Prop()
 ru: string;
}
