import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, SortOrder } from "mongoose";
import { Apartment } from "./apartments.schema";
import { ApartmentDTO } from "./apartments.dto";
import { Response } from "express";
import { QueryInterface } from "../Interfaces/QueryInterface";
import { ApartmentStatusEnum } from "src/Enums/apartmentStatusEnum";

@Injectable()
export class ApartmentService {
  constructor(@InjectModel("apartment") private apartmentsModel: Model<Apartment>) {}

  //Retrieve all apartments
  async getAllApartments(query: QueryInterface, res: Response) {
    let filter;
    if (query.status){
      filter = {status: query.status}
    } else {
      filter = query.rooms ?  {rooms: query.rooms} : {};
      filter["status"] = ApartmentStatusEnum.vacant;
    }
    const sort = {price: query.price as SortOrder || "desc" };
    const apartments = await this.apartmentsModel.find(filter).sort(sort).select("-__v").exec();

    if (!apartments || Object.keys(apartments).length === 0) {
      return res.status(404).json({ message: "Apartments with speecified query not found." });
    }

    return res.status(200).json({ apartments });
  }

  //Retrieve single apartment
  async getApartmentById(id: string, res: Response) {
    const apartment = await this.apartmentsModel.findById(id).select("-__v");

    if (!apartment) {
      return res.status(404).json({ message: `Apartment with id "${id}" not found.` });
    }

    return res.status(200).json({ apartment }); 
  }

  //Add new apartment
  async createApartment(data: ApartmentDTO, res: Response): Promise<Response> {
    const apartmentData = {status: ApartmentStatusEnum.vacant, ...data};
    
    const apartmentCreated = await this.apartmentsModel.create(apartmentData);

    if (!apartmentCreated) {
      return res.status(500).json({ message: "Something went wrong during apartment creation." });
    }

    return res.status(201).json({ message: "Apartment created successfully." });
  }

  //Delete single apartment
  async deleteApartmentById(id: string, res: Response) {
    await this.apartmentsModel.findByIdAndDelete(id);

    return res.status(200).json({ message: "Apartment deleted successfully." });
  }

  //Update apartment
  async updateApartmentById(id: string, data: ApartmentDTO, res: Response) {
    const apartmentData = data;

    const updatedApartment = await this.apartmentsModel.findByIdAndUpdate(id, apartmentData);

    if (!updatedApartment) {
      return res.status(404).json({ message: `Apartment with id "${id}" not found.` });
    }

    return res.status(200).json({ message: "Apartment updated successfully." });
  };
}