import React, { useState } from "react";

import { colors } from "../../theme";
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
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/programmes"
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            Programmes
          </NavLink>
          <NavLink
            to="/notices"
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            Notices
          </NavLink>
          <NavLink
            to="/gallery"
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{ color: colors.secondary }}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/application-form"
            activeStyle={{ color: colors.secondary }}
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
