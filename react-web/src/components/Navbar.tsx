import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #343a40;
  color: white;
  padding: 15px;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <h1>Universal UI Toolkit</h1>
    </NavbarContainer>
  );
};

export default Navbar;
