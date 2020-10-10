import styled from "styled-components";

export const ProgrammesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    justify-content: center;
  }
`;
