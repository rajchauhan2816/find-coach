import { Coach } from "./../../coaches/schemas/coach.schema";
import { User } from "../../users/schemas/user.schema";
import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Request extends Document {
  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: "user",
    autopopulate: true,
  })
  from: User;

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: "coach",
    autopopulate: true,
  })
  to: Coach;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const requestsSchema = SchemaFactory.createForClass(Request);
