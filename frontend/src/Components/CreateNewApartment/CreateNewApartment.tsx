import { useFormik } from "formik";
import { FC } from "react";
import { ApartmentsFormCreateEdit } from "../ApartmentFormCreateEdit";
import { useAppDispatch } from "../../Store/hooks";
import { CreateEditFormValidation } from "../../Utils/CreateEditFormValidation";
import { createApartmentThunk, getAllApartmentsThunk } from "../../Store/Apartments/ApartmentsApi";
import { ApartmentInterface } from "../../Interfaces";

const initialValues = {
  name: "",
  description: "",
  rooms: 1,
  price: 0,
} as ApartmentInterface;

export const CreateNewApartment: FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validate: CreateEditFormValidation,
    onSubmit: async (values, actions) => {
      await dispatch(createApartmentThunk(values))
      await dispatch(getAllApartmentsThunk());
      actions.resetForm();
    },
  });

  return (
  <>
    <h2>🤑Create a new rent</h2>
    <ApartmentsFormCreateEdit formikProps={formik} setEditMode={null}/>
  </>
  );
};