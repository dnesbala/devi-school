import styled from "styled-components";
import { colors } from "../../theme";

export const Card = styled.div`
  height: 500px;
  width: 350px;
  background-color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 3rem;
  box-shadow: 1px 1px 2px 3px ${colors.white};
  position: relative;
  transition: color 0.5s ease-in-out;

  &:hover {
    background-color: transparent;
  }

  @media screen and (max-width: 970px) {
    height: 400px;
    width: 300px;
  }
`;

export const NoticePin = styled.img`
  width: 70px;
  position: absolute;
  top: -5px;
  left: 5px;
`;

export const NoticeText = styled.p`
  background-color: ${colors.secondary2};
  color: ${colors.white};
  padding: 10px 1.5rem;
  transform: rotate(-90deg);
  position: absolute;
  top: 30px;
  left: -25px;
  z-index: -1;
`;

export const NoticeImage = styled.img`
  width: 200px;
  object-fit: contain;
  margin-bottom: 2rem;
`;

export const NoticeTitle = styled.p`
  color: #666;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;
