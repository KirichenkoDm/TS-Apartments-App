import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApartmentStatusEnum } from "src/Enums/apartmentStatusEnum";

@Schema()
export class Apartment {
  @Prop({ required: true })
  rooms: number;

  @Prop({
    required: true,
    maxlength: [99, "Must be shorter than 100 symbols, got {VALUE}"]
  })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({
    required: true,
    maxlength: [999, "Must be shorter than 1000 symbols, got {VALUE}"]
  })
  description: string;

  @Prop({
    required: true,
    enum: Object.values(ApartmentStatusEnum)
  })
  status: string
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);