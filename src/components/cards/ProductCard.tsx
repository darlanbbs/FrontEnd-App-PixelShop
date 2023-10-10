import { deletarProduto } from "@/db/db";
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

const ProductCard: React.FC<ProductCardProps> = ({
  nome,
  preco,
  quantidade_estoque,
  descricao,
  onDetalhesClick,
  onEditClick,
  onDeleteClick,
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
        <DefaultButton onClick={onEditClick} title="Editar" />
      </ButtonArea>
    </CardWrapper>
  );
};

export default ProductCard;
