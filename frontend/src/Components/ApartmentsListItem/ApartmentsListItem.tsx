import { FC, useState } from "react";
import { ApartmentsListItemEdit } from "../ApartmentsListItemEdit";
import { ApartmentsListItemInfo } from "../ApartmentsListItemInfo";
import { listItemProps } from "./ApartmentsListItemProps";

export const ApartmentsListItem: FC<listItemProps> = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <li key={props.apartmentData._id} >
      {
        editMode?
          <ApartmentsListItemEdit
            apartmentData={props.apartmentData}
            setEditMode={setEditMode}
          />
          :          
          <ApartmentsListItemInfo 
            apartmentData={props.apartmentData}
            setEditMode={setEditMode} 
            CancelRent={null}            
          />
      }
    </li>
  );
};