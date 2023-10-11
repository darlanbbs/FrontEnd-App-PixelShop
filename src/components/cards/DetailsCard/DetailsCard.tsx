"use client";
import { Product } from "@/components/Interfaces/Interfaces";
import React from "react";

const DetailsCard = ({
  id,
  nome,
  descricao,
  preco,
  quantidade_estoque,
}: Product) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <div>ID: {id}</div>
      <div>Nome: {nome}</div>
      {descricao && <div>Descrição: {descricao}</div>}
      {/* @ts-ignore */}
      <div>Preço: R${parseFloat(preco).toFixed(2)}</div>
      <div>Quantidade em Estoque: {quantidade_estoque}</div>
    </div>
  );
};

export default DetailsCard;
