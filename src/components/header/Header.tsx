import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Button from "../Button/Button";

const HeaderWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
`;

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
