"use client";
import React from "react";
import { Container } from "reactstrap";
import Button from "../Buttons/AddButton/Button";
import { HeaderWrapper, Title } from "./styles";
import ModalCriarProduto from "../Modals/ModalCriarProduto/ModalCriarProduto";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container fluid>
        <Title>Catálogo de Produtos</Title>
      </Container>
      <ModalCriarProduto />
    </HeaderWrapper>
  );
};

export default Header;
