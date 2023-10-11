"use client";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import ProductCard from "./../cards/ProductCard";
import { listarProdutos, deletarProduto, atualizarProduto } from "@/db/db";
import Header from "../header/Header";
import { CatalogPageProps } from "../Interfaces/Interfaces";
import { useRouter } from "next/navigation";

const CatalogPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<CatalogPageProps[]>([]);

  const handleDetalhesClick = (id: number) => {
    router.push(`/produto/${id}`);
  };

  const handleEditClick = (
    id: number,
    nome: string,
    preco: number,
    quantidade_estoque: number,
    descricao: string
  ) => {
    console.log("handleEdit", id);
    atualizarProduto(id, nome, preco, quantidade_estoque, descricao);
  };

  useEffect(() => {
    listarProdutos()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter produtos:", error);
      });
  }, [products]);

  return (
    <Container>
      <Header />
      <Row>
        {products.map((product) => (
          <Col md={6} lg={4} key={product.id} className="mb-4">
            <ProductCard
              id={product.id}
              nome={product.nome}
              preco={product.preco}
              quantidade_estoque={product.quantidade_estoque}
              descricao={product.descricao}
              onDetalhesClick={() => handleDetalhesClick(product.id)}
              onEditClick={() =>
                handleEditClick(
                  product.id,
                  product.nome,
                  product.preco,
                  product.quantidade_estoque,
                  product.descricao
                )
              }
              onDeleteClick={() => deletarProduto(product.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CatalogPage;
