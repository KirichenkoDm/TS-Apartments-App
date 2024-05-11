import { ApartmentInterface } from "./ApartmentInterface";
import { QueryParamsInterface } from "./QueryParamsInterface";

export enum Status {
  ready = "ready",
  loading = "loading",
  failed = "failed",
}

export interface ApartmentSliceStateInterface {
  apartmentList: Array<ApartmentInterface>;
  apartmentQuery: QueryParamsInterface;
  currentApartment: ApartmentInterface;
  fetchStatus: Status;
}