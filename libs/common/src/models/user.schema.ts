import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  roles?: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
