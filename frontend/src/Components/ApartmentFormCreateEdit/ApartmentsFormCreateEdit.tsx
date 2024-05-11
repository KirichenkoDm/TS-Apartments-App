import { FC, KeyboardEvent } from "react"
import { StyledApartmentFormCreateEdit } from "./ApartmentFormCreateEditStyled";
import { FormProps } from "./ApartmentsFormCreateEditProps";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ApartmentsFormCreateEdit: FC<FormProps> = (props) => {
  const formik = props.formikProps;

  const handleNumberInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.match(/^[.e+-]/))
      e.preventDefault();
  };

  const handleCancelEdit = () => {
    props.setEditMode!(false);
  }

  return (
    <StyledApartmentFormCreateEdit
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >      
      <div>
        <span>
          <label className="input-name">
            Title
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Apartment name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ?
              <p className="error-message">{formik.errors.name}</p>
              :
              <i/>}
          </label>
          <label>
            Rooms
            <select
              id="rooms"
              name="rooms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {numbers.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </label>
          <label>
            Rent Price
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Rent price"
              onKeyDown={handleNumberInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ?
              <p className="error-message">{formik.errors.price}</p>
              :
              <i/>}
          </label>
        </span>
        <textarea
          id="description"
          name="description"
          placeholder="Apartment description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ?
          <p className="error-message">{formik.errors.description}</p>
          :
          <i/>}
      </div>
      <div>
        <button type="submit" className="button-green">Submit 
          {props.setEditMode? " edit" : " rent"}
        </button>
        {props.setEditMode? <button onClick={handleCancelEdit}>Cancel</button> : null}
      </div>
      
    </StyledApartmentFormCreateEdit>
  );
};
