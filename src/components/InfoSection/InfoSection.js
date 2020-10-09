import React from "react";
import { Button } from "../../globalStyles";

import professor from "../../images/professor.svg";
import {
  SectionContainer,
  Row,
  Col1,
  Col2,
  Heading,
  SubHeading,
  Image,
} from "./InfoSection.elements";

const InfoSection = () => {
  return (
    <SectionContainer>
      <Row>
        <Col1>
          <Heading>Devi Secondary School</Heading>
          <SubHeading>"Better Place for Quality Education"</SubHeading>
          <Button primary>Know More</Button>
        </Col1>
        <Col2>
          <Image src={professor} />
        </Col2>
      </Row>
    </SectionContainer>
  );
};

export default InfoSection;
