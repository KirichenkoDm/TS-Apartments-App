import { ApartmentStatusEnum } from "src/Enums/apartmentStatusEnum";

export class ApartmentDTO {
  rooms: number;
  name: string;
  price: number;
  description: string;
  status: ApartmentStatusEnum;
}