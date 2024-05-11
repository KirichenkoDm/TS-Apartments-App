import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res } from "@nestjs/common";
import { ApartmentDTO } from "./apartments.dto";
import { Response, response } from "express";
import { ApartmentService } from "./apartments.service";
import { QueryInterface } from "../Interfaces/QueryInterface";
import { ApartmentStatusEnum } from "src/Enums/apartmentStatusEnum";

const ResponceInternalError = () => {
  return response.status(500).json({
    message: "Something went wrong",
    error: "Internal server error",
  });
}

@Controller("apartments")
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) { };

  @Get("")
  async getAllApartments(
    @Res() response: Response,
    @Query() query: QueryInterface
  ) {
    try {
      return response = await this.apartmentService.getAllApartments(query, response);
    } catch (error) { ResponceInternalError() }
  }

  @Get("/occupied")
  async getOccupiedApartments(
    @Res() response: Response,
  ) {
    try {
      return response = await this.apartmentService.getAllApartments({status: ApartmentStatusEnum.occupied}, response);
    } catch (error) { ResponceInternalError() }
  }

  @Get("/:id")
  async getApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string
  ) {
    try {
      return response = await this.apartmentService.getApartmentById(apartmentId, response);
    } catch (error) { ResponceInternalError() }
  }

  @Post("")
  async createApartment(
    @Res() response: Response,
    @Body() apattmentData: ApartmentDTO
  ) {
    try {
      return response = await this.apartmentService.createApartment(apattmentData, response);
    } catch (error) { ResponceInternalError() }
  }

  @Delete("/:id")
  async deleteApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string
  ) {
    try {
      return response = await this.apartmentService.deleteApartmentById(apartmentId, response);
    } catch (error) { ResponceInternalError() }
  }

  @Put("/:id")
  async updateApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string,
    @Body() apartmentData
  ) {
    try {
      return response = await this.apartmentService.updateApartmentById(apartmentId, apartmentData, response);
    } catch (error) { ResponceInternalError() }
  }

  @Patch("/:id")
  async changeStatusApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string,
    @Body() apartmentData
  ) {
    try {
      return response = await this.apartmentService.updateApartmentById(apartmentId, apartmentData, response);
    } catch (error) { ResponceInternalError() }
  }
}