# FrontEnd-App-PixelShop

Este é um projeto de frontend construído em NextJs + Typescript, que se conecta a um backend Node.js + PostgreSQL para gerenciar produtos. Abaixo estão as instruções detalhadas para executar o projeto.

Instruções para Execução

# 1.Instalação de Dependências

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, instale as dependências do projeto executando o comando:

```
npm install || yarn
```

# 2.Iniciando o servidor

```
npm run dev || yarn dev
```
- Nota: Por ser um banco de dados online hospedado em Oregon, pode haver um leve delay ao executar as funções. Se preferir, você também pode configurar um banco de dados local para evitar esse atraso.<br>


O servidor estará disponível em http://localhost:5000.

# Funcionalidades

Página de Catálogo

- Rota: /
- Mostra uma lista de produtos com opções para editar e excluir.


Página de Detalhes

- Rota: /produto/:id
- Exibe detalhes de um produto específico.

Edição

- Permite editar os detalhes de um produto.


Criação

- Permite criar um novo produto.

Deletar

 - Permite deletar um produto

# Dificuldade encontrada

Durante o desenvolvimento, uma das maiores dificuldades foi na manipulação dos dados entre o frontend e o backend, especialmente nas operações de atualização e criação de novos produto.<br>

  
