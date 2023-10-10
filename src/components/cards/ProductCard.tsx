interface Product {
  nome: string;
  preco: number;
  quantidade_estoque: number;
  descricao?: string;
}

interface ProductCardProps extends Product {
  onDetalhesClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  nome,
  preco,
  quantidade_estoque,
  descricao,
  onDetalhesClick,
}) => {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: R${preco}</p>
      <p>Quantidade em Estoque: {quantidade_estoque}</p>
      {descricao && <p>{descricao}</p>}
      <button onClick={onDetalhesClick}>Detalhes</button>
    </div>
  );
};

export default ProductCard;
