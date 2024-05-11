import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);