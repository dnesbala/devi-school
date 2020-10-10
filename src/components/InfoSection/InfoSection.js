import React from "react";
import { Button } from "../../globalStyles";

import {
  SectionContainer,
  Row,
  Col1,
  Col2,
  Heading,
  SubHeading,
  Image,
} from "./InfoSection.elements";

const InfoSection = ({ heading, subHeading, buttonText, image, reverse }) => {
  return (
    <SectionContainer>
      <Row reverse={reverse}>
        <Col1>
          <Heading>{heading}</Heading>
          <SubHeading>{subHeading}</SubHeading>
          <Button primary>{buttonText}</Button>
        </Col1>
        <Col2>
          <Image src={image} />
        </Col2>
      </Row>
    </SectionContainer>
  );
};

export default InfoSection;
