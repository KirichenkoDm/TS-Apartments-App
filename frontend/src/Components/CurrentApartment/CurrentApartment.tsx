import { FC, useEffect } from "react";
import { selectCurrentApartments } from "../../Store/Apartments/ApartmentsSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { 
  changeStatusApartmentByIdThunk, 
  getAllApartmentsThunk, 
  getOccupiedApartmentsThunk 
} from "../../Store/Apartments/ApartmentsApi";
import { ApartmentInterface } from "../../Interfaces";
import { ApartmentsListItemInfo } from "../ApartmentsListItemInfo";
import { StyledCurrentApartment } from "./CurrentApartmentStyled";
import { ApartmentStatusEnum } from "../../Enums";

export const CurrentApartment: FC = () => {
  const apartments = useAppSelector(selectCurrentApartments);
  const dispatch = useAppDispatch();

  const handleCancelCurrentApartment = async (id: string) => {
    let cancelApartmen = {
      ...apartments.find(obj => obj._id === id)
    } as ApartmentInterface;
    if (cancelApartmen) {
      cancelApartmen.status = ApartmentStatusEnum.vacant;
      await dispatch(changeStatusApartmentByIdThunk(cancelApartmen));
      await dispatch(getOccupiedApartmentsThunk());
      await dispatch(getAllApartmentsThunk());
    } else console.log("Something went wrong");
  };

  useEffect(() => {
    dispatch(getOccupiedApartmentsThunk());
  }, [dispatch]);
  
  return (
    <>
      <h2>🤩Your current rent</h2>
      <StyledCurrentApartment>
        {
          !apartments.length ?
            <h3>No current rent😞</h3>
            :
            apartments.map(
              (apartment: ApartmentInterface) =>
                <li key={apartment._id}><ApartmentsListItemInfo
                  key={apartment._id}
                  apartmentData={apartment}
                  setEditMode={null}
                  CancelRent={handleCancelCurrentApartment}
                /></li>
            )
        }
      </StyledCurrentApartment>
    </>
  );
};