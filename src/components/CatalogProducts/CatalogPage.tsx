"use client";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import ProductCard from "./../cards/ProductCard";
import { listarProdutos } from "@/db/db";
import Header from "../header/Header";
import { CatalogPageProps } from "../Interfaces/Interfaces";

const CatalogPage = () => {
  const [products, setProducts] = useState<CatalogPageProps[]>([]);

  useEffect(() => {
    listarProdutos()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter produtos:", error);
      });
  }, []);
  console.log(products);
  const handleDetalhesClick = (id: number) => {
    alert(`Detalhes do Produto ${id}`);
  };

  return (
    <Container>
      <Header />
      <Row>
        {products.map((product) => (
          <Col md={6} lg={4} key={product.id} className="mb-4">
            <ProductCard
              nome={product.nome}
              preco={product.preco}
              quantidade_estoque={product.quantidade_estoque}
              descricao={product.descricao}
              onDetalhesClick={() => handleDetalhesClick(product.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CatalogPage;
