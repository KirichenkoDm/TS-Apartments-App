import styled from "styled-components";

export const StyledCurrentApartment = styled.div`
  width: 1000px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #FFFFFF;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 7px;  
  
  span {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  h3 {
    max-width: 70%; 

  }

  button {
    align-self: flex-end;
  }
`