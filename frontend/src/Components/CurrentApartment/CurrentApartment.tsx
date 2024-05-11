import { FC, useEffect } from "react";
import { selectMemorizedCurrentApartment, setCurrentApartment } from "../../Store/Apartments/ApartmentsSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { getApartmentByIdThunk } from "../../Store/Apartments/ApartmentsApi";
import { StyledCurrentApartment } from "./CurrentApartmentStyled";
import { ApartmentInterface } from "../../Interfaces";

export const CurrentApartment: FC = () => {
  const apartment = useAppSelector(selectMemorizedCurrentApartment);
  const dispatch = useAppDispatch();

  const handleCancelCurrentApartment = () => {
    dispatch(setCurrentApartment({} as ApartmentInterface))
  };

  useEffect(() => {
    if (apartment._id && !apartment.name) {
      dispatch(getApartmentByIdThunk());
    }
  });

  return (
    <>
      <h2>Your current rent</h2>
      <StyledCurrentApartment>

        {apartment._id ?
          <>
            <span>
              <h3>{`${apartment.name}`}</h3>
              <h3>{`${apartment.rooms} Rooms, Rent: $${apartment.price}/month`}</h3>
            </span>
            <p>{`${apartment.description}`}</p>
            <button 
              onClick={handleCancelCurrentApartment}
              className="button-red">Cancel Rent</button>
          </>
          :
          <h3>No Current Apartment</h3>
        }
      </StyledCurrentApartment>
    </>
  );
};