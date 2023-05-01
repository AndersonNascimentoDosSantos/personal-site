import React, { ReactNode } from "react";

// import { Container } from './styles';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="py-4 bg-gray-300 w-screen h-screen flex flex-col">
      {children}
    </div>
  );
};

export default Container;
