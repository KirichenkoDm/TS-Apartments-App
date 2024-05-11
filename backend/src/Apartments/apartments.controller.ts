import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from "@nestjs/common";
import { ApartmentDTO } from "./apartments.dto";
import { Response } from "express";
import { ApartmentService } from "./apartments.service";
import { QueryInterface } from "../Interfaces/QueryInterface";

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
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: "Internal server error",
      });
    }
  }

  @Get("/:id")
  async getApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string
  ) {
    try {
      return response = await this.apartmentService.getApartmentById(apartmentId, response);
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: "Internal server error",
      });
    }
  }

  @Post("")
  async createApartment(
    @Res() response: Response,
    @Body() apattmentData: ApartmentDTO
  ) {
    try {
      return response = await this.apartmentService.createApartment(apattmentData, response);
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: "Internal server error",
      });
    }
  }

  @Delete("/:id")
  async deleteApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string
  ) {
    try {
      return response = await this.apartmentService.deleteApartmentById(apartmentId, response);
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: "Internal server error",
      });
    }
  }

  @Put("/:id")
  async updateApartmentById(
    @Res() response: Response,
    @Param("id") apartmentId: string,
    @Body() apartmentData
  ) {
    try {
      return response = await this.apartmentService.updateApartmentById(apartmentId, apartmentData, response);
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: "Internal server error",
      });
    }
  }
}