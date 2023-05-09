import React from 'react';
import classes from './Logo.module.scss';
import logo from '../../images/logo.png';

export const Logo: React.FC = () => (
  <div className={classes['logo-container']}>
    <img src={logo} alt="TailHunter logo" />
  </div>
);
