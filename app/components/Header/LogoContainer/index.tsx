/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

// import { Container } from './styles';

const LogoContainer: React.FC<{ imgSrc?: string }> = ({ imgSrc }) => {
  return (
    <div className="relative">
      <img
        className="mx-auto h-10 w-auto"
        src={
          imgSrc ||
          "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        }
        alt="Your Company"
      />
    </div>
  );
};

export default LogoContainer;
