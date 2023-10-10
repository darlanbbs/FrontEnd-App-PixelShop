import React from "react";
import { Container } from "reactstrap";
import Button from "../Button/Button";
import { HeaderWrapper, Title } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container fluid>
        <Title>Catálogo de Produtos</Title>
      </Container>
      <Button />
    </HeaderWrapper>
  );
};

export default Header;
