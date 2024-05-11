import { FormikProps } from "formik";
import { ApartmentInterface } from "../../Interfaces";

export interface FormProps {
  formikProps: FormikProps<ApartmentInterface>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>> | null;
}