import styled from "styled-components";

export const StyledApartmentsListQuery = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  label {
    font-size: 1.2em;
    display: flex;
    gap: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  select {
    height: 36px;
    padding: 3px;
  }

  input {
    height: 36px;
    padding-left: 3px;
  }
`