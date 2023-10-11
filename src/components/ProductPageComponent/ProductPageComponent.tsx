import React from "react";
import styled from "styled-components";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

type Props = {
  children: React.ReactNode;
};

const ProductPageComponent = ({ children }: Props) => {
  return (
    <Container>
      <DetailsHeader />
      <Card>{children}</Card>
    </Container>
  );
};

export default ProductPageComponent;
