import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ApartmentSchema } from "./apartments.schema";
import { ApartmentController } from "./apartments.controller";
import { ApartmentService } from "./apartments.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "apartment", schema: ApartmentSchema}])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
}) 
export class ApartmentModule {}