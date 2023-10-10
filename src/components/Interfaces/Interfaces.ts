interface Product {
  nome: string;
  preco: number;
  quantidade_estoque: number;
  descricao?: string;
}

export interface ProductCardProps extends Product {
  onDetalhesClick: () => void;
}

export interface CatalogPageProps extends Product {
  id: number;
  handleDetalhesClick: (id: number) => void;
}
