"use client";
import React, { useState, useEffect } from "react";
import { detalhesDoProduto } from "@/db/db";
import DetailsCard from "@/components/cards/DetailsCard/DetailsCard";
import ProductPageComponent from "@/components/ProductPageComponent/ProductPageComponent";

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
    <ProductPageComponent>
      {product && (
        <DetailsCard
          id={product.id}
          nome={product.nome}
          descricao={product.descricao}
          preco={product.preco}
          quantidade_estoque={product.quantidade_estoque}
        />
      )}
    </ProductPageComponent>
  );
};

export default Page;
