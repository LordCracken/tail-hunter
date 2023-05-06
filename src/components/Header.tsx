import React from 'react';
import Logo from './Logo';
import Container from './Container';

const Header: React.FC = () => (
  <header className="header">
    <Container className="header-content">
      <Logo />
      <h1>Tail Hunter</h1>
    </Container>
  </header>
);

export default Header;
