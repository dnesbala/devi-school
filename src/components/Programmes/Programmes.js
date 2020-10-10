import React from "react";

import { ProgramCard } from "..";
import { Heading } from "../../globalStyles";
import { ProgrammesContainer } from "./Programmes.elements";
import { programmes } from "../../data/homepageData";

const Programmes = () => {
  return (
    <>
      <Heading long>Programmes Offered</Heading>
      <ProgrammesContainer>
        {programmes.map((program, i) => (
          <ProgramCard
            key={i}
            programName={program.name}
            programText={program.description}
          />
        ))}
      </ProgrammesContainer>
    </>
  );
};

export default Programmes;
