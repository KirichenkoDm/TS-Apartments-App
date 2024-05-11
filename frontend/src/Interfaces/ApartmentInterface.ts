import { ApartmentStatusEnum } from "../Enums";

export interface ApartmentInterface {
  _id: string;
  rooms: number;
  name: string;
  price: number;
  description: string;
  status: ApartmentStatusEnum;
}