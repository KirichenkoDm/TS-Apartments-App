import { FC } from "react";
import { useFormik } from "formik";
import { editApartmentByIdThunk, getAllApartmentsThunk } from "../../Store/Apartments/ApartmentsApi";
import { ApartmentsFormCreateEdit } from "../ApartmentFormCreateEdit/";
import { CreateEditFormValidation } from "../../Utils/CreateEditFormValidation";
import { ApartmentInterface } from "../../Interfaces";
import { useAppDispatch } from "../../Store/hooks";
import { listItemProps } from "./ApartmentsListItemEditProps";

export const ApartmentsListItemEdit: FC<listItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      _id: props.apartmentData._id,
      name: props.apartmentData.name,
      description: props.apartmentData.description,
      rooms: props.apartmentData.rooms,
      price: props.apartmentData.price,
    } as ApartmentInterface,

    validate: CreateEditFormValidation,

    onSubmit: async values => {
      await dispatch(getAllApartmentsThunk());
      await dispatch(editApartmentByIdThunk(values));
      await dispatch(getAllApartmentsThunk());
      props.setEditMode(false);
    },
  });

  return (
    <ApartmentsFormCreateEdit formikProps = {formik} setEditMode={props.setEditMode}/>    
  );
};
