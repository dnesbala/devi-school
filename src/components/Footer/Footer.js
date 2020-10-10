import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import bookLover from "../../images/book_lover.svg";

import {
  FooterContainer,
  Row,
  Col1,
  SchoolLogo,
  SocialIconsWrapper,
  SocialLink,
  Col2,
  ColHeading,
  SchoolName,
  SchoolAddress,
  SchoolContact,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col1>
          <SchoolLogo src={bookLover} alt="Book Lover" />
          <SocialIconsWrapper>
            <SocialLink href="https://facebook.com" target="_blank">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialLink>
          </SocialIconsWrapper>
        </Col1>
        <Col2>
          <ColHeading>Find Us</ColHeading>
          <SchoolName>Devi Secondary School</SchoolName>
          <SchoolAddress>Saudol, Tathali, Bhaktapur</SchoolAddress>
          <SchoolContact>01-661234</SchoolContact>
        </Col2>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
