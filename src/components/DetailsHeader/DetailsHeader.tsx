"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const DetailsHeader = () => {
  const router = useRouter();

  const handleDetalhesClick = () => {
    router.push(`/`);
  };

  return (
    <HeaderContainer>
      <DefaultButton onClick={handleDetalhesClick} title="Voltar" />
    </HeaderContainer>
  );
};

export default DetailsHeader;
