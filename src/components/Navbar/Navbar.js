import React, { useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavLink,
  NavHamburger,
  NavClose,
} from "./Navbar.elements";

const Navbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const toggleHamburgerClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  const closeMobileMenu = () => {
    setHamburgerClick(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          DSS
        </NavLogo>
        <NavLinks hamburgerClick={hamburgerClick}>
          <NavLink
            to="/"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/programmes"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Programmes
          </NavLink>
          <NavLink
            to="/notices"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Notices
          </NavLink>
          <NavLink
            to="/gallery"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/application-form"
            activeStyle={{ color: "#fc766aff" }}
            onClick={closeMobileMenu}
          >
            Application Form
          </NavLink>
        </NavLinks>
        {hamburgerClick ? (
          <NavClose onClick={toggleHamburgerClick} />
        ) : (
          <NavHamburger onClick={toggleHamburgerClick} />
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
