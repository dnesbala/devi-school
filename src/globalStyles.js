import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: ${({ primary }) => (primary ? "#184A45FF" : "#FC766AFF")};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#184A45DD" : "#FC766ADD")};
  }
`;

export default GlobalStyle;
