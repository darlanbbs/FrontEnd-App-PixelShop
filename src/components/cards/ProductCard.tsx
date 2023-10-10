import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import { ProductCardProps } from "../Interfaces/Interfaces";
import {
  CardWrapper,
  TrashIcon,
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
}) => {
  return (
    <CardWrapper>
      <TrashIcon onClick={() => console.log("Lixeira clicada")} />
      <Title>{nome}</Title>
      <Price>Preço: R${preco}</Price>
      <Stock>Quantidade em Estoque: {quantidade_estoque}</Stock>
      {descricao && <Description>{descricao}</Description>}
      <ButtonArea>
        <DefaultButton onClick={onDetalhesClick} title="Detalhes" />
        <DefaultButton onClick={onDetalhesClick} title="Editar" />
      </ButtonArea>
    </CardWrapper>
  );
};

export default ProductCard;
