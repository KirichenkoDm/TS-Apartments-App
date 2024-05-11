import { ApartmentInterface } from "../../Interfaces";

export interface listItemProps {
  apartmentData: ApartmentInterface;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>> | null;
  CancelRent: ((_id: string) => void) | null;
}