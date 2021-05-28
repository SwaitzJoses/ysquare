import React from "react";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";



const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>USER DETAILS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
         
            <Nav className="ml-auto">
            
              {userInfo ? (
                <Dropdown>
                  <Dropdown.Toggle bg="" variant="primary" id="dropdown-basic">
                    
                    {userInfo.name }

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    
                    <Dropdown.Item
                      onClick={() => {
                        logOutHandler();
                      }}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                <LinkContainer to="/signup">
                  <Button className="m-2">
                    <i className="fas fa-user "></i>Sign Up
                  </Button>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Button className="m-2">
                    <i className="fas fa-user"></i>Sign In
                  </Button>
                </LinkContainer>
                </>
              )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
