import React from "react";

import { Button } from "../../globalStyles";
import { colors } from "../../theme";
import { Card, CardTitle, CardBody } from "./ProgramCard.elements";

const ProgramCard = ({ programName, programText }) => {
  return (
    <Card>
      <CardTitle>{programName}</CardTitle>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={colors.secondary}
          fill-opacity="0.8"
          d="M0,288L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
      <CardBody>{programText}</CardBody>
      <Button small>Details</Button>
    </Card>
  );
};

export default ProgramCard;
