import styled from "styled-components";
import { colors } from "../../theme";

export const Card = styled.div`
  background-color: ${colors.tertiary};
  width: 300px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 1px 1px ${colors.secondary2};
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
  margin: auto 1rem;

  &:hover {
    background-color: transparent;
  }
`;

export const CardTitle = styled.h3`
  color: grey;
  margin-bottom: -4rem;
`;

export const CardBody = styled.p``;
