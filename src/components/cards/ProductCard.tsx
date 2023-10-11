import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import DeleteButton from "../Buttons/deleteButton/DeleteButton";
import { ProductCardProps } from "../Interfaces/Interfaces";
import {
  CardWrapper,
  Title,
  Price,
  Stock,
  Description,
  ButtonArea,
} from "./styles";
import ModalEditarProduto from "../Modals/ModalEditarProduto/ModalEditarProduto";
import { useForm } from "./../context/ProductIdContext";

const ProductCard: React.FC<ProductCardProps> = ({
  nome,
  preco,
  quantidade_estoque,
  descricao,
  onDetalhesClick,
  onEditClick,
  onDeleteClick,
  id,
}) => {
  return (
    <CardWrapper>
      <DeleteButton onClick={onDeleteClick} />
      <Title>{nome}</Title>
      <Price>Preço: R${preco}</Price>
      <Stock>Quantidade em Estoque: {quantidade_estoque}</Stock>
      {descricao && <Description>{descricao}</Description>}
      <ButtonArea>
        <DefaultButton onClick={onDetalhesClick} title="Detalhes" />
        <ModalEditarProduto
          onClick={onEditClick}
          id={id}
          descricao={descricao}
          preco={preco}
          nome={nome}
          quantidade_estoque={quantidade_estoque}
        />
      </ButtonArea>
    </CardWrapper>
  );
};

export default ProductCard;
