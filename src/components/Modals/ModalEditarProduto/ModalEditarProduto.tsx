import DefaultButton from "@/components/Buttons/DefaultButton/DefaultButton";
import { atualizarProduto } from "@/db/db";
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

type Props = {
  onClick: () => void;
  nome: string;
  preco: number;
  descricao: string;
  quantidade_estoque: number;
  id: number;
};

function ModalEditarProduto({
  id,
  nome,
  preco,
  descricao,
  quantidade_estoque,
}: Props) {
  const [modal, setModal] = useState(false);
  const [editNome, setEditNome] = useState(nome || "");
  const [editPreco, setEditPreco] = useState(preco);
  const [editDescricao, setEditDescricao] = useState(descricao || "");
  const [editQuantidadeEstoque, setEditQuantidadeEstoque] =
    useState(quantidade_estoque);

  const toggle = () => setModal(!modal);

  const handleAtualizarClick = async (e: React.FormEvent) => {
    e.preventDefault();

    atualizarProduto(
      id,
      editNome,
      editPreco,
      editQuantidadeEstoque,
      editDescricao
    );

    setModal(false);
    setEditNome("");
    setEditPreco(0);
    setEditQuantidadeEstoque(0);
    setEditDescricao("");
  };

  return (
    <div>
      <DefaultButton title="Editar" onClick={toggle} />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar Produto</ModalHeader>

        <ModalBody>
          <Form onSubmit={handleAtualizarClick}>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                value={editNome}
                onChange={(e) => setEditNome(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="preco">Preço</Label>
              <Input
                type="text"
                name="preco"
                id="preco"
                value={editPreco}
                onChange={(e) => setEditPreco(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantidadeEstoque">Quantidade em Estoque</Label>
              <Input
                type="text"
                name="quantidadeEstoque"
                id="quantidadeEstoque"
                value={editQuantidadeEstoque}
                onChange={(e) => setEditQuantidadeEstoque(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="descricao">Descrição</Label>
              <Input
                type="textarea"
                name="descricao"
                id="descricao"
                value={editDescricao}
                onChange={(e) => setEditDescricao(e.target.value)}
              />
            </FormGroup>
            <DefaultButton type="submit" title="Atualizar" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <DefaultButton title="Cancelar" onClick={toggle} />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEditarProduto;
