import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Container from '../components/Container';

const RootLayout = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default RootLayout;
