# 📊 Visualizador de Gastos Públicos

Um sistema web interativo para explorar e visualizar os gastos públicos de municípios brasileiros de forma simples e acessível.

O objetivo é transformar dados abertos (Portal da Transparência, IBGE, DataSUS, etc.) em gráficos claros e relatórios fáceis de entender, ajudando cidadãos, estudantes e até gestores a acompanharem para onde o dinheiro público está indo.

---

## 🚀 Funcionalidades
- Seleção de cidade e ano.
- Exibição de gráficos interativos (pizza, barras, linha do tempo) mostrando os gastos por categoria (Saúde, Educação, Transporte, etc.).
- Tabela resumo com os valores numéricos.
- Possibilidade de exportar relatórios (PDF/Excel) *(fase futura)*.
- Comparação entre diferentes municípios *(fase futura)*.

---

## 🎯 Escopo do MVP (Primeira Versão)
- Consumir dados abertos (inicialmente via CSV).
- Back-end expõe uma API simples para consultar gastos por cidade/ano.
- Front-end mostra os dados em um gráfico interativo.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **React.js** → construção da interface.
- **Recharts** ou **Chart.js** → gráficos interativos.
- **Axios** → consumo da API.
- **TailwindCSS** → estilização rápida e responsiva.

### Back-end
- **Node.js + Express** *(ou Python com FastAPI/Flask, se preferir)* → criação da API.
- **CSV/JSON** → fonte inicial dos dados.
- *(Futuro)* Banco de Dados → **MongoDB** ou **PostgreSQL** para persistência.

### Ferramentas Extras
- **Git/GitHub** → versionamento.
- **Postman** → testes da API.
- **Vercel / Netlify** → deploy do front.
- **Render / Railway / Heroku** → deploy do back.

---

## 📂 Estrutura do Projeto
