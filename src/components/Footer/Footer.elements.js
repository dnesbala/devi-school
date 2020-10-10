import styled from "styled-components";
import { colors } from "../../theme";

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  padding: 1rem;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;
export const Col1 = styled.div``;
export const SchoolLogo = styled.img`
  width: 200px;
`;
export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 620px) {
    margin-bottom: 1rem;
  }
`;
export const SocialLink = styled.div`
  color: ${colors.primary};
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${colors.white};
    transform: rotate(360deg);
  }
`;
export const Col2 = styled.div`
  color: ${colors.tertiary};
`;

export const ColHeading = styled.h2``;

export const SchoolName = styled.p``;
export const SchoolAddress = styled.p``;
export const SchoolContact = styled.p``;
