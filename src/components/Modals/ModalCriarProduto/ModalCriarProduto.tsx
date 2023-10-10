import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { criarProduto } from "@/db/db";
import DefaultButton from "@/components/Buttons/DefaultButton/DefaultButton";
import Button from "@/components/Buttons/AddButton/Button";

function ModalCriarProduto(args: any) {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const [descricao, setDescricao] = useState("");

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await criarProduto(
      nome,
      parseFloat(preco),
      parseInt(quantidadeEstoque),
      descricao
    );

    setNome("");
    setPreco("");
    setQuantidadeEstoque("");
    setDescricao("");

    toggle();
  };

  return (
    <div>
      <Button onClick={toggle} />

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Novo Produto</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="preco">Preço</Label>
              <Input
                type="text"
                name="preco"
                id="preco"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantidadeEstoque">Quantidade em Estoque</Label>
              <Input
                type="text"
                name="quantidadeEstoque"
                id="quantidadeEstoque"
                value={quantidadeEstoque}
                onChange={(e) => setQuantidadeEstoque(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="descricao">Descrição</Label>
              <Input
                type="textarea"
                name="descricao"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </FormGroup>
            <DefaultButton type="submit" title="Enviar" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <DefaultButton onClick={toggle} title="Cancelar" />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCriarProduto;
