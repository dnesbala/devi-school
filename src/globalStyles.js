import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./theme";

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
  background-color: ${({ primary }) =>
    primary ? colors.primary : colors.secondary};
  color: #fff;
  padding: ${({ small }) => (small ? "5px 10px" : "10px 20px")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? colors.secondary : colors.primary};
  }
`;

export const Heading = styled.h2`
  color: #555;
  text-align: center;
  margin: 1rem 0 2rem 0;
  position: relative;

  &::after {
    content: "";
    width: ${({ long }) => (long ? "250px" : "100px")};
    height: 3px;
    background-color: ${colors.secondary};
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default GlobalStyle;
