import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const listarProdutos = () => {
  return api.get("/produto");
};

export const obterProdutoPorId = (id: number) => {
  return api.get(`/produto/${id}`);
};
