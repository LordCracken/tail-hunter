import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header/Header';
import { Container } from '@components/Container';

const RootLayout: React.FC = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default RootLayout;
