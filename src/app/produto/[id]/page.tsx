"use client";
import React, { useState, useEffect } from "react";
import { detalhesDoProduto } from "@/db/db";
import DetailsCard from "@/components/cards/DetailsCard/DetailsCard";

const Page = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    detalhesDoProduto(params.id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter produtos:", error);
      });
  }, [params.id]);

  return (
    <div>
      {product && (
        <DetailsCard
          id={product.id}
          nome={product.nome}
          descricao={product.descricao}
          preco={product.preco}
          quantidade_estoque={product.quantidade_estoque}
        />
      )}
    </div>
  );
};

export default Page;
