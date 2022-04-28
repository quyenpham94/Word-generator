import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

import "./NavBar.css";

/** Shows up on every page.
 *
 * When user is logged in, shows Categories, Profile, & Logout tabs
 * Otherwise, shows Login & Sign Up tabs
 *
 * App -> NavBar
 */

const NavBar = ({ logout }) => {
  // toggle burger menu at small dimensions
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((open) => !open);
  };

  // authentication check
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  const loggedInNav = () => {
    return (
            <ul className="navbar-nav ml-auto">
                <Navbar className="nav" dark expand="md" light>
                <NavbarBrand href="/">WORD GENERATOR</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <NavItem>
                    <NavLink className="nav-link" href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/categories">
                        Categories
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/profile">
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/" onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </NavLink>
                </NavItem>
                </Navbar>
            </ul>
    );
  };
  const loggedOutNav = () => {
    return (
      <div>
        <Navbar className="nav" dark expand="md" light>
          <NavbarBrand href="/">WORD GENERATOR</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#features">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };

  return <div>{currentUser ? loggedInNav() : loggedOutNav()}</div>;
};

export default NavBar;