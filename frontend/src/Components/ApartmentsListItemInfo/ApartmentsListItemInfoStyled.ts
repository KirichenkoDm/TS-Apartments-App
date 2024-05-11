import styled from "styled-components";

export const StyledApartmentsListItemInfo = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 

  span {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  h3 {
    max-width: 70%;
  }

  .apartment-info {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 80%;
  }
  
  .list-item-controls {
    height: 144px;
    justify-content: space-around; 
    display: flex;
    flex-direction: column;
  }

  .delete-confirmation {
    display: flex;
    flex-direction: row;

    button {
      width: 50%;
    }
  };
  
`