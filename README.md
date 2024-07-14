# API RESTful do Entrega Fácil com Node.js, TypeScript e MongoDB

## Descrição

Esta é a API RESTful do Entrega Fácil, desenvolvida com Node.js e TypeScript, projetada para gerenciar usuários, admins, veículos, produtos e empresas. Utiliza MongoDB como banco de dados e Mongoose como ODM.

## Estrutura do Projeto

project-root/
├── src/
│ ├── controllers/
│ │ ├── adminController.ts
│ │ ├── userController.ts
│ │ ├── vehicleController.ts
│ │ ├── productController.ts
│ │ └── companyController.ts
│ ├── models/
│ │ ├── admin.ts
│ │ ├── user.ts
│ │ ├── vehicle.ts
│ │ ├── product.ts
│ │ └── company.ts
│ ├── routes/
│ │ ├── adminRoutes.ts
│ │ ├── userRoutes.ts
│ │ ├── vehicleRoutes.ts
│ │ ├── productRoutes.ts
│ │ └── companyRoutes.ts
│ ├── services/
│ │ ├── adminService.ts
│ │ ├── userService.ts
│ │ ├── vehicleService.ts
│ │ ├── productService.ts
│ │ └── companyService.ts
│ ├── middlewares/
│ │ ├── authMiddleware.ts
│ │ └── errorHandler.ts
│ ├── utils/
│ │ ├── db.ts
│ │ └── logger.ts
│ ├── tests/
│ │ ├── user.test.ts
│ │ ├── admin.test.ts
│ │ ├── vehicle.test.ts
│ │ ├── product.test.ts
│ │ └── company.test.ts
│ ├── app.ts
│ ├── server.ts
│ └── config.ts
├── package.json
├── tsconfig.json
├── .env
├── .env.example
├── jest.config.js
└── README.md

## Estrutura do Banco de Dados
Com base nas informações fornecidas, a estrutura das relações no banco de dados pode ser visualizada da seguinte maneira:

Usuários são os compradores de produtos das lojas.
Lojas são as entidades que vendem produtos.
Produtos estão relacionados a lojas.
Empresas (oficinas) são clientes que podem comprar produtos das lojas.
Veículos são utilizados para entregar produtos das lojas para os usuários e empresas.
Diagrama de Entidade-Relacionamento

+-------------+           +-------------+           +-------------+
|   Usuário   |           |    Loja     |           |   Empresa   |
|-------------|           |-------------|           | (Oficina)   |
| - _id       |           | - _id       |           |-------------|
| - nome      |           | - nome      |           | - _id       |
| - email     |<--------->| - endereço  |           | - nome      |
| - senha     |           | - produtos  |           | - endereço  |
+-------------+           +-------------+           +-------------+
                            |
                            |
                            |
                            |
                       +-------------+
                       |   Produto    |
                       |-------------|
                       | - _id       |
                       | - nome      |
                       | - descrição |
                       | - preço     |
                       | - estoque   |
                       | - store     |
                       +-------------+

+-------------+           +-------------+
|  Veículo    |           |    Pedido   |
|-------------|           |-------------|
| - _id       |           | - _id       |
| - tipo      |           | - produto   |
| - placa     |<--------->| - quantidade|
| - motorista |           | - comprador |
+-------------+           +-------------+


## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/sua-api.git
Instale as dependências:


cd sua-api
npm install
Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env
Preencha os valores necessários no arquivo .env
Inicie o servidor:


npm run dev
Uso
A API possui os seguintes endpoints:

## Usuários
POST /api/users - Cria um novo usuário
GET /api/users - Busca todos os usuários
GET /api/users/
- Busca um usuário por ID
PUT /api/users/
- Atualiza um usuário
DELETE /api/users/
- Deleta um usuário

## Admins
POST /api/admins - Cria um novo admin
GET /api/admins - Busca todos os admins
GET /api/admins/
- Busca um admin por ID
PUT /api/admins/
- Atualiza um admin
DELETE /api/admins/
- Deleta um admin
## Veículos
POST /api/vehicles - Cria um novo veículo
GET /api/vehicles - Busca todos os veículos
GET /api/vehicles/
- Busca um veículo por ID
PUT /api/vehicles/
- Atualiza um veículo
DELETE /api/vehicles/
- Deleta um veículo

## Produtos
POST /api/products - Cria um novo produto
GET /api/products - Busca todos os produtos
GET /api/products/
- Busca um produto por ID
PUT /api/products/
- Atualiza um produto
DELETE /api/products/
- Deleta um produto

## Empresas
POST /api/companies - Cria uma nova empresa
GET /api/companies - Busca todas as empresas
GET /api/companies/
- Busca uma empresa por ID
PUT /api/companies/
- Atualiza uma empresa
DELETE /api/companies/
- Deleta uma empresa
Testes
Para rodar os testes, utilize o comando:


npm test
Os testes estão localizados na pasta src/tests.

Contribuição
Faça um fork do projeto
Crie uma branch com a feature (git checkout -b feature/nome-da-feature)
Commit suas mudanças (git commit -m 'Adiciona uma nova feature')
Faça um push para a branch (git push origin feature/nome-da-feature)
Abra um Pull Request
Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Contato
Autor: Célio Cleiton
Email: cleitonfreelance@gmail.com