import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 100px;
  background-color: ${props => props.backgroundColor};
`;

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login/1" className="nav-link">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // <StyledHeaderDiv backgroundColor="white">
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">홈</Link>
    //       </li>
    //       <li>
    //         <Link to="/login/10">로그인</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </StyledHeaderDiv>
  );
};

export default Header;
