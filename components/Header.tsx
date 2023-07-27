import React from "react";
import Logo from "./Logo";
import Container from "./Container";

const Header = () => {
  return (
    <header className="header bg-LIGHTBLUE py-8">
      <Container className="flex justify-center items-center">
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
