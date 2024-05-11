import styled from "styled-components";

export const StyledApartmentsList = styled.div`

  width: 1032px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  padding-left: 16px;

  ul {
    list-style-type: none;
    overflow-y: auto; 
    scrollbar-gutter: stable;
  };

  li {
    margin-bottom: 15px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #FFFFFF;
  }; 
`