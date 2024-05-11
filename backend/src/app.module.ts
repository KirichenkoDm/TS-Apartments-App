import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";
import { ApartmentModule } from "./Apartments/apartments.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ApartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
