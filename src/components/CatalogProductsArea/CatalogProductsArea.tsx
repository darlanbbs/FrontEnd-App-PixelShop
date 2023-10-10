"use client";
import React from "react";
import { CenteredContainer } from "./style";

type Props = {
  children: React.ReactNode;
};

const CatalogProductsArea = ({ children }: Props) => {
  return <CenteredContainer fluid>{children}</CenteredContainer>;
};

export default CatalogProductsArea;
