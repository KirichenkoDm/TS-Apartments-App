import { FC, useState } from "react";
import { ApartmentInterface } from "../../Interfaces";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { setCurrentApartment } from "../../Store/Apartments/ApartmentsSlice";
import { deleteApartmentByIdThunk, getAllApartmentsThunk } from "../../Store/Apartments/ApartmentsApi";
import { StyledApartmentsListItemInfo } from "./ApartmentsListItemInfoStyled";

interface listItemProps {
  apartmentData: ApartmentInterface
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApartmentsListItemInfo: FC<listItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentApartmentID = useAppSelector(state => state.apartments.currentApartment._id)
  const [deleteSubmittion, setDeleteSubmittion] = useState(false);
  const handleChangeMode = () => {
    props.setEditMode(true);
  };

  const handleSelectApartment = () => {
    dispatch(setCurrentApartment(props.apartmentData));
  }

  const handleDelete = async () =>{
    if (deleteSubmittion) {
      await dispatch(deleteApartmentByIdThunk(props.apartmentData._id));

      // clear current apartment if match
      if (currentApartmentID === props.apartmentData._id)
        await dispatch(setCurrentApartment({} as ApartmentInterface));

      await dispatch(getAllApartmentsThunk());
    } else {
      setDeleteSubmittion(true);
    }
  }
  const handleDeny = () =>{
    setDeleteSubmittion(false);
  }

  return (
    <StyledApartmentsListItemInfo>
      <div className="apartment-info">
        <span>
          <h3>{`${props.apartmentData.name}`}</h3>
          <h3>{`${props.apartmentData.rooms} Rooms, Rent: $${props.apartmentData.price}/month`}</h3>
        </span>
        <p>{`${props.apartmentData.description}`}</p>
      </div>
      <div className="list-item-controls">
        <button onClick={handleChangeMode}>Edit</button>
        <button onClick={handleSelectApartment}>Rent</button>
        {deleteSubmittion? 
        <div className="delete-confirmation">
          <button onClick={handleDelete} className="button-red">Confirm</button>
          <button onClick={handleDeny}>Cancel</button>
        </div>
        :
        <button onClick={handleDelete} className="button-red">Delete</button>
        }
      </div>
    </StyledApartmentsListItemInfo>
  );
};