import { NavLink as navLink, Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { colors } from "../../theme";

export const Nav = styled.nav`
  background-color: ${colors.primary};
  width: 100%;
  box-shadow: 0px 2px 2px 0px black;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  width: 100px;
  margin-left: 40px;
  font-size: 2rem;
  color: ${colors.white};
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 70px);
    position: absolute;
    top: 70px;
    left: ${({ hamburgerClick }) => (hamburgerClick ? 0 : "-100%")};
    transition: all 0.5s ease;
    background-color: ${colors.primary};
  }
`;

export const NavLink = styled(navLink)`
  padding: 0 15px;
  text-decoration: none;
  color: #e8f9fd;
  font-size: 1rem;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:hover {
    color: ${colors.secondary};
  }

  @media screen and (max-width: 970px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const NavHamburger = styled(GiHamburgerMenu)`
  color: #fff;
  font-size: 1.7rem;
  margin-right: 20px;
  cursor: pointer;
  display: none;

  &:hover {
    color: #59ce8f;
  }

  @media screen and (max-width: 970px) {
    display: block;
  }
`;

export const NavClose = styled(MdClose)`
  color: ${colors.white};
  font-size: 2.2rem;
  margin-right: 20px;
  cursor: pointer;
  display: none;

  &:hover {
    color: #ff1e00;
  }

  @media screen and (max-width: 970px) {
    display: block;
  }
`;
