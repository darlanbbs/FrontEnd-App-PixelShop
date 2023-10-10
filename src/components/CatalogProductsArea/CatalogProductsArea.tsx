"use client";
import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
type Props = {
  children: React.ReactNode;
};

const CatalogProductsArea = ({ children }: Props) => {
  const CenteredContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  return <CenteredContainer fluid>{children}</CenteredContainer>;
};

export default CatalogProductsArea;
