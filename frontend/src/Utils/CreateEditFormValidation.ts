import { ApartmentInterface, ApartmentValidationInterface } from "../Interfaces";

export const CreateEditFormValidation = (values: ApartmentInterface) => {
  const errors = {} as ApartmentValidationInterface;

  if (!values.name) {
    errors.name = "Can't be empty";
  } else if (values.name.length > 99) {
    errors.name = "Name is too long (max 99 symbols)";
  }

  if (!values.price) {
    errors.price = "Can't be empty";
  } else if (values.price < 1) {
    errors.price = "Can't be less then 1$";
  }

  if (!values.description) {
    errors.description = "Can't be empty";
  } else if (values.description.length > 999) {
    errors.description = "Description is too long (max 999 symbols)";
  }

  return errors;
};