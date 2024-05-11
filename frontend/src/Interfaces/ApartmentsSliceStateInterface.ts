import { FetchStatusEnum } from "../Enums";
import { ApartmentInterface } from "./ApartmentInterface";
import { QueryParamsInterface } from "./QueryParamsInterface";

export interface ApartmentSliceStateInterface {
  apartmentList: Array<ApartmentInterface>;
  apartmentQuery: QueryParamsInterface;
  currentApartments: Array<ApartmentInterface>;
  fetchStatus: FetchStatusEnum;
}