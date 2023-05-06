import React, { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
