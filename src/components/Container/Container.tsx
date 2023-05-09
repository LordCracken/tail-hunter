import React, { ReactNode } from 'react';
import classes from './Container.module.scss';

interface IContainer {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<IContainer> = ({ children, className }) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};
