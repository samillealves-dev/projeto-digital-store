# 🛍️ Digital Store

Projeto de Front-end desenvolvido durante a formação **Desenvolvedor Full Stack — Geração Tech**.

O objetivo foi construir a interface de uma loja virtual utilizando **React**, seguindo o protótipo disponibilizado no Figma, com foco em responsividade, organização do código e reutilização de componentes.

A aplicação simula a experiência de navegação em um e-commerce, permitindo visualizar produtos, acessar detalhes e explorar diferentes seções da loja.

## 💻 Tecnologias utilizadas

- **React** — construção da interface com componentes reutilizáveis.
- **JavaScript** — implementação da lógica e das interações.
- **Vite** — ambiente de desenvolvimento e build.
- **React Router DOM** — gerenciamento das rotas e navegação.
- **HTML5 e CSS3** — estruturação e estilização das páginas.
- **PrimeReact, PrimeFlex e PrimeIcons** — bibliotecas de interface e recursos visuais.
- **Styled-components** — biblioteca de estilização.

## 🚀 Funcionalidades implementadas

### Página inicial — Home

- Banner principal.
- Coleções em destaque.
- Categorias em destaque.
- Produtos em alta.
- Seção de oferta especial.
- Navegação para a listagem e os detalhes dos produtos.

### Página de listagem de produtos

- Exibição de produtos em cards reutilizáveis.
- Organização dos produtos em grid responsivo.
- Interface de filtros por categorias e características.
- Campo de ordenação.
- Navegação para a página de detalhes do produto.

*Os filtros e a ordenação possuem implementação visual, sem alteração dinâmica dos resultados.*

### Página de detalhes do produto

- Galeria interativa com cinco opções de cores de fundo.
- Navegação pelas opções utilizando setas e miniaturas.
- Exibição das informações, preço e descrição do produto.
- Seleção visual de tamanhos e cores.
- Botão de compra.
- Seção de produtos recomendados.

### Funcionalidades gerais

- Header e Footer compartilhados entre as páginas.
- Campo de busca com redirecionamento e parâmetro na URL.
- Navegação entre páginas utilizando React Router DOM.
- Layout responsivo para desktop e dispositivos móveis.
- Componentes reutilizáveis.

## 📁 Estrutura do projeto

O projeto foi organizado em componentes e páginas, facilitando a manutenção e a reutilização de código.

```text
projeto-digital-store/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── FeaturedCategories.jsx
│   │   ├── FeaturedCollections.jsx
│   │   ├── FilterGroup.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── Layout.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductListing.jsx
│   │   ├── ProductOptions.jsx
│   │   ├── SpecialOffer.jsx
│   │   └── TrendingProduct.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   └── ProductViewPage.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── REQUISITOS.md
└── README.md
```

Cada componente possui seu próprio arquivo de estilização CSS, contribuindo para a organização do projeto.

## 🔗 Rotas da aplicação

| Rota | Descrição |
|---|---|
| `/` | Página inicial |
| `/produtos` | Listagem de produtos |
| `/product/:id` | Detalhes do produto |

## ⚙️ Como executar o projeto

**Pré-requisito:** Node.js e npm instalados.

**1. Clone o repositório:**

```bash
git clone https://github.com/samillealves-dev/projeto-digital-store.git
```

**2. Acesse a pasta:**

```bash
cd projeto-digital-store
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse o endereço local informado pelo Vite no terminal.

**5. Para gerar a versão de produção:**

```bash
npm run build
```

## 📌 Observações

Este projeto foi desenvolvido com finalidade educacional.

Os produtos e as informações exibidas são demonstrativos. A aplicação não possui integração com banco de dados, autenticação ou processamento de compras.

## 🌐 Deploy

A aplicação será publicada na Vercel.

**Link do projeto:** será adicionado após a publicação.

## 👩‍💻 Desenvolvedora

**Samille Alves**

Projeto desenvolvido como parte da formação Full Stack — Geração Tech.

**GitHub:** https://github.com/samillealves-dev/projeto-digital-store