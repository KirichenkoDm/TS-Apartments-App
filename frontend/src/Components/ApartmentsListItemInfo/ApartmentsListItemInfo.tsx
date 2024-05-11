import { FC, useState } from "react";
import { useAppDispatch } from "../../Store/hooks";
import { 
  changeStatusApartmentByIdThunk, 
  deleteApartmentByIdThunk, 
  getAllApartmentsThunk, 
  getOccupiedApartmentsThunk 
} from "../../Store/Apartments/ApartmentsApi";
import { StyledApartmentsListItemInfo } from "./ApartmentsListItemInfoStyled";
import { ApartmentStatusEnum } from "../../Enums";
import { listItemProps } from "./ApartmentsListItemInfoProps";

export const ApartmentsListItemInfo: FC<listItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const [deleteSubmittion, setDeleteSubmittion] = useState(false);
  const handleChangeMode = () => {
    props.setEditMode!(true);
  };

  const handleSelectApartment = async () => {
    let cancelApartmen = { ...props.apartmentData };
    cancelApartmen.status = ApartmentStatusEnum.occupied;
    await dispatch(changeStatusApartmentByIdThunk(cancelApartmen));
    await dispatch(getOccupiedApartmentsThunk());
    await dispatch(getAllApartmentsThunk());
  };

  const handleDelete = async () => {
    if (deleteSubmittion) {
      await dispatch(deleteApartmentByIdThunk(props.apartmentData._id));
      await dispatch(getAllApartmentsThunk());
    } else {
      setDeleteSubmittion(true);
    }
  }
  const handleDeny = () => {
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
        {
          props.CancelRent ?
            <button
              onClick={() => props.CancelRent!(props.apartmentData._id)!}
              className="button-red">Cancel Rent
            </button>
            :
            <>
              <button onClick={handleChangeMode}>Edit</button>
              <button onClick={handleSelectApartment}>Rent</button>
              {
                deleteSubmittion ?
                  <div className="delete-confirmation">
                    <button onClick={handleDelete} className="button-red">Confirm</button>
                    <button onClick={handleDeny}>Cancel</button>
                  </div>
                  :
                  <button onClick={handleDelete} className="button-red">Delete</button>
              }
            </>
        }
      </div>
    </StyledApartmentsListItemInfo>
  );
};