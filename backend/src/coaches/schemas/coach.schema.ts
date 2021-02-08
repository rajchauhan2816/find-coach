import { User } from '../../users/schemas/user.schema';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Coach extends Document {
  @Prop({ required: true, type: Types.ObjectId })
  user: User;

  @Prop({ required: true })
  areas: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  hourlyRate: number;
}

export const coachesSchema = SchemaFactory.createForClass(Coach);
