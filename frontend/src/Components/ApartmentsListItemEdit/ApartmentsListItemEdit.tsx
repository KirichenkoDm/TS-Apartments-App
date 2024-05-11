import { FC } from "react";
import { useFormik } from "formik";
import { editApartmentByIdThunk, getAllApartmentsThunk } from "../../Store/Apartments/ApartmentsApi";
import { ApartmentsFormCreateEdit } from "../ApartmentFormCreateEdit/";
import { CreateEditFormValidation } from "../../Utils/CreateEditFormValidation";
import { ApartmentInterface } from "../../Interfaces";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { setCurrentApartment } from "../../Store/Apartments/ApartmentsSlice";

interface listItemProps {
  apartmentData: ApartmentInterface
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApartmentsListItemEdit: FC<listItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const currentApartmentID = useAppSelector(state => state.apartments.currentApartment._id)

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
      
      // update current apartment if match
      if (currentApartmentID === values._id)
        await dispatch(setCurrentApartment(values));
      props.setEditMode(false);
    },
  });

  return (
    <ApartmentsFormCreateEdit formikProps = {formik} setEditMode={props.setEditMode}/>    
  );
};
