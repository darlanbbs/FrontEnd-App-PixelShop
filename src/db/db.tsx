import { Product } from "./../components/Interfaces/Interfaces";
import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const listarProdutos = async () => {
  return api.get("/produto");
};

export const criarProduto = async (
  nome: string,
  preco: number,
  quantidade_estoque: number,
  descricao?: string
): Promise<Product | undefined> => {
  try {
    const response: AxiosResponse<Product> = await api.post("/produto", {
      nome,
      preco,
      quantidade_estoque,
      descricao,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error(
        "Erro ao criar produto. Status:",
        axiosError.response.status
      );
    } else if (axiosError.request) {
      console.error("Erro na requisição:", axiosError.request);
    } else {
      console.error("Erro:", axiosError.message);
    }

    return undefined;
  }
};
