"use client";
import { CatalogPageProps } from "@/components/Interfaces/Interfaces";
import { detalhesDoProduto } from "@/db/db";
import React, { useState, useEffect } from "react";

type Props = {};

const Page = ({ params }: { params: { id: number } }) => {
  const [products, setProducts] = useState<CatalogPageProps[]>([]);

  useEffect(() => {
    detalhesDoProduto(params.id)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter produtos:", error);
      });
  }, [products]);

  return <div>My Post: {params.id}</div>;
};

export default Page;
