import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: #b0b8b4ff;
`;

export const Row = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  @media screen and (max-width: 970px) {
    font-size: 2.2rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  max-width: 400px;
  @media screen and (max-width: 970px) {
    max-width: 350px;
  }
`;

export const Col1 = styled.div`
  @media screen and (max-width: 970px) {
    margin-bottom: 3rem;
  }
`;

export const Col2 = styled.div``;
