interface Product {
  nome: string;
  preco: number;
  quantidadeEstoque: number;
  descricao?: string;
}

interface ProductCardProps {
  product: Product;
  onDetalhesClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onDetalhesClick,
}) => {
  const { nome, preco, quantidadeEstoque, descricao } = product;

  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: R${preco}</p>
      <p>Quantidade em Estoque: {quantidadeEstoque}</p>
      {descricao && <p>{descricao}</p>}
      <button onClick={onDetalhesClick}>Detalhes</button>
    </div>
  );
};

export default ProductCard;
