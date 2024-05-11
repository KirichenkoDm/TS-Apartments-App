import { FC, useState } from "react";
import { ApartmentInterface } from "../../Interfaces";
import { ApartmentsListItemEdit } from "../ApartmentsListItemEdit";
import { ApartmentsListItemInfo } from "../ApartmentsListItemInfo";

interface listItemProps {
  apartmentData: ApartmentInterface
  even: boolean;
}
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
          />
      }
    </li>
  );
};