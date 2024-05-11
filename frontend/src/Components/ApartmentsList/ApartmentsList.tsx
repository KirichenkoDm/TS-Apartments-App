import { FC, useEffect } from "react";
import { ApartmentsListQuery } from "../ApartmentsListQuery";
import { StyledApartmentsList } from "./ApartmentsListStyled";
import { ApartmentInterface } from "../../Interfaces";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { ApartmentsListItem } from "../ApartmentsListItem";
import { getAllApartmentsThunk } from "../../Store/Apartments/ApartmentsApi";
import { selectAllApartments, selectApartmentQuery } from "../../Store/Apartments/ApartmentsSlice";

export const ApartmentsList: FC = () => {
  const dispatch = useAppDispatch();
  const apartmentQuery = useAppSelector(selectApartmentQuery);
  const apartments = useAppSelector(selectAllApartments);

  useEffect(() => {
    dispatch(getAllApartmentsThunk());
  }, [dispatch, apartmentQuery]);
  return (
    <>
      <h2>Available apartments ({apartments.length})</h2>
      <StyledApartmentsList>
          <ApartmentsListQuery />
          <ul>
            {
              !apartments.length ?
                <h2>No Apartmens Match Querry.</h2>
                :
                apartments.map(
                  (apartment: ApartmentInterface) =>
                    <ApartmentsListItem
                      key={apartment._id}
                      apartmentData={apartment}
                      />
                )
            }
          </ul>
      </StyledApartmentsList>
    </>
  );
};