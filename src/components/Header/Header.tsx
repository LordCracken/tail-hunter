import React from 'react';

import { Logo } from '../Logo';
import { Container } from '../Container';
import classes from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={classes.header}>
    <Container className={classes['header-content']}>
      <Logo />
      <h1>Tail Hunter</h1>
    </Container>
  </header>
);
