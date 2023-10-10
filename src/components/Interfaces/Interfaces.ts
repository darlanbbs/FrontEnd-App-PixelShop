export interface Product {
  nome: string;
  preco: number;
  quantidade_estoque: number;
  descricao?: string;
}

export interface ProductCardProps extends Product {
  onDetalhesClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export interface CatalogPageProps extends Product {
  id: number;
  handleDetalhesClick: (id: number) => void;
  handleDeleteClick: (id: number) => void;
  handleEditClick: (id: number) => void;
}
