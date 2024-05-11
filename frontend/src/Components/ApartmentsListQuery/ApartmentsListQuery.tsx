import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { selectApartmentQuery, setApartmentQuery } from "../../Store/Apartments/ApartmentsSlice";
import { StyledApartmentsListQuery } from "./ApartmentsListQueryStyled";

export const ApartmentsListQuery: FC = () => {
  const dispatch = useAppDispatch();
  const apartmentQuery = useAppSelector(selectApartmentQuery);

  const handleFilterRooms = (e: ChangeEvent<HTMLInputElement>) => {
    let newVal = Number.isNaN(e.target.valueAsNumber) ? 0 : Math.trunc(e.target.valueAsNumber);
    if (newVal > 10) { newVal = 10; }
    dispatch(setApartmentQuery({
      filterRoomsNumber: newVal,
      sortingDescending: apartmentQuery.sortingDescending
    }));
  };

  const handleInvertSorting = () => {
    dispatch(setApartmentQuery({
      filterRoomsNumber: apartmentQuery.filterRoomsNumber,
      sortingDescending: !apartmentQuery.sortingDescending
    }));
  };

  return (
    <StyledApartmentsListQuery>
      <label>
        Only show apartments with rooms:
        <input
          type='number'
          min="0"
          max="10"
          value={ apartmentQuery.filterRoomsNumber > 0 ?
            apartmentQuery.filterRoomsNumber
            :
            "" }
          onChange={handleFilterRooms}
        ></input>
      </label>
      <label>
        Sort by:
        <select onChange={handleInvertSorting}>
          <option key="desc" value={"desc"}>Price - highest to lowest</option>
          <option key="asc" value={"asc"}>Price - lowest to highest</option>          
        </select>
      </label>
    </StyledApartmentsListQuery>
  );
};