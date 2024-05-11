import styled from "styled-components";

export const StyledMainPage = styled.main`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  width: 1030px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 15px;

  //global button style
  button {
    border-radius: 3px;
    border-style: none;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid gray;
    height: 36px;
    width: 168px;
    letter-spacing: .25px;
    padding: 3px;
    text-align: center;
  }  

  .button-red {
    background-color: #F0323C;
    color: #FAFAFA;
  }

  h1 {
    align-self: start;
  }

  h2 {
    margin-top: 25px;
    align-self: start;
  }
`