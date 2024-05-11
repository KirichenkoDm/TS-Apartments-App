import styled from "styled-components";

export const StyledApartmentFormCreateEdit = styled.form`
  width: 1000px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #E6E6EB;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
  div {
    display: flex; 
    flex-direction: column;
  }
  
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 50px;
  }
  
  label {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input-name {
    width: 70%;
  }
  select {
    height: 36px;
    padding-left: 3px;
  }  
  
  input {
    height: 36px;
    padding-left: 3px;
  }

  

  textarea {
    height: 96px;
    padding-left: 3px;
    align-self: center;
    width: 754px;
    resize: vertical;
  }

  i {
    height: 24px;
  }

  .error-message {
    height: 24px;
    color: #FF3030;
  }

  .button-green {
    margin-bottom: 25px;
    background-color: #23B996;
    color: #FAFAFA;
  }
`