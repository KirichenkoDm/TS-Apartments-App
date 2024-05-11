import { FC } from "react";
import { ApartmentsList } from "../../ApartmentsList";
import { CurrentApartment } from "../../CurrentApartment";
import { StyledMainPage } from "./MainPageStyled";
import { CreateNewApartment } from "../../CreateNewApartment";

export const MainPage: FC = () => {
  return (
    <StyledMainPage>
      <h1>Apartments Marketplace</h1>
      <CreateNewApartment/>
      <CurrentApartment/>
      <ApartmentsList/>      
    </StyledMainPage>
  );
};