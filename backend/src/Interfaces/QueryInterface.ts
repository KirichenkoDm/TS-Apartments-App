import { ApartmentStatusEnum } from "src/Enums/apartmentStatusEnum";

export interface QueryInterface { 
  rooms?: number; 
  price?: string;
  status?: ApartmentStatusEnum;
}