# 🌐 Site Institucional – Hospital das Clínicas

Este projeto é um site institucional desenvolvido para o **Hospital das Clínicas**, com o objetivo de apresentar informações relevantes aos pacientes, visitantes e colaboradores de forma clara, acessível e moderna.

---

## 🎯 Objetivo do Projeto

Desenvolver um site simples e funcional para o Hospital das Clínicas, proporcionando:

- Informações sobre serviços prestados
- Contatos e localização
- Perguntas frequentes (FAQ) com interatividade
- Interface amigável, com design responsivo e leve
- Consumo de API


---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando apenas tecnologias **front-end**:

- **REACT(com TSX)** – Estrutura do site, componentização e gerenciamento de estado.

- **TAILWINDCSS** – Estilização da interface design responsivo.

- **TYPESCRIPT** – Linguagem principal do projeto (superset do JavaScript) para garantir a tipagem e segurança do código.

- **REACT ROUTER** – Biblioteca para gerenciar a navegação entre as páginas e criar uma SPA (Single Page Application).

- **VITE** – Ferramenta de build e servidor de desenvolvimento local (localhost) que compila seu código .tsx e atualiza o navegador.




---

## 👨‍💻 Integrantes

- Phillipo Barbosa
- Henrique Rodrigues

---

## 🔗 Repositório no GitHub

O projeto está disponível publicamente no GitHub:

🔗 https://github.com/Pipo1506/Sprint4.git


---

## 🔗 Video demonstrativo no Youtube

🔗 https://youtu.be/_wIQFq-Q0gQ

---

## 📁 Estrutura de Pastas do Projeto
├── public/
│   ├── Imagens/
│   │   ├── loogo.png
│   │   ├── Medico.png
│   │   ├── Henrique.png
│   │   └── Phillipo.jpeg
│   └── (outros ícones e assets)
│
├── src/
│   ├── Components/
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   ├── NavBar/
│   │   │   └── Navbar.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   │
│   ├── Pages/
│   │   ├── HomePage.tsx
│   │   ├── IntegrantesPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── ContatoPage.tsx
│   │   └── CadastroPage.tsx
│   │
│   ├── App.tsx         # Componente principal com as rotas
│   ├── main.tsx        # Ponto de entrada do React
│   └── index.css       # Arquivo de CSS com o Tailwind
│
├── .gitignore
├── package.json        # Dependências do projeto
├── README.md           # O arquivo que estamos criando
└── vite.config.ts      # Configuração do Vite
