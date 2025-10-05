# 📅 Rotina Diária

[![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/seu-usuario/rotina-diaria)
[![Licença](https://img.shields.io/badge/licença-MIT-blue)](LICENSE)

Aplicação web para ajudar crianças a organizarem suas rotinas diárias de forma lúdica e educativa. Foi pensada para a Clarinha e transforma tarefas cotidianas em uma experiência divertida com feedback visual e “coins” por tarefas concluídas.

## 🎯 Objetivo

Facilitar a organização da rotina infantil com uma interface simples, colorida e acessível, onde é possível definir horários, escolher atividades e acompanhar o progresso ao longo do dia.

## ✨ Funcionalidades

- 📝 Criação de rotina por intervalos de 30 minutos (06:00–21:30)
- 🎨 Catálogo de atividades com ícones (adicionar, editar, remover)
- ✅ Marcação de tarefas como concluídas com contagem de “coins”
- 💾 Persistência local via SQLite (atividades, rotina e coins)
- 💾 Fallback local via LocalStorage
- 📱 Layout responsivo e amigável para crianças

## 🧰 Tecnologias

- Frontend estático: `index.html`, `styles.css`, `script.js`
- Ícones: `Font Awesome`
- Banco de dados: `SQLite`
- App React (opcional) em `frontend/` com Vite
- Backend (opcional) em `backend/` com NestJS (estrutura base)

> Observação: a versão funcional principal é a estática (HTML/CSS/JS) na raiz do projeto. O app React e o backend NestJS estão disponíveis como exploração/expansão futura e não são obrigatórios para uso.

## 🏦 Banco de Dados (SQLite)

O projeto passa a utilizar SQLite para persistência local. Recomendamos criar um arquivo `data/app.db` para o banco.

### 1) Criar o banco e tabelas

Crie a pasta `data/` (se ainda não existir) e, com o `sqlite3` instalado, execute:

```bash
sqlite3 data/app.db < schema.sql
```

Conteúdo sugerido para `schema.sql`:

```sql
-- Tabela de atividades disponíveis
CREATE TABLE IF NOT EXISTS activities (
  name TEXT PRIMARY KEY,
  icon TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Tabela de rotinas (uma rotina principal com id fixo = 1)
CREATE TABLE IF NOT EXISTS routines (
  id INTEGER PRIMARY KEY,
  routine_data TEXT NOT NULL, -- JSON serializado
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Tabela para contagem de moedas (coins)
CREATE TABLE IF NOT EXISTS user_data (
  id INTEGER PRIMARY KEY,
  coins INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Registro padrão
INSERT OR IGNORE INTO user_data (id, coins) VALUES (1, 0);

-- Atividades de exemplo (opcional)
INSERT OR IGNORE INTO activities (name, icon) VALUES
  ('Acordar', 'fa-sun'),
  ('Almoçar', 'fa-utensils'),
  ('Aula de Música', 'fa-music'),
  ('Brincar', 'fa-puzzle-piece'),
  ('Dentista', 'fa-tooth'),
  ('Dever de Casa', 'fa-book-open'),
  ('Dormir', 'fa-moon'),
  ('Escola', 'fa-school');
```

> Observação: o frontend estático pode continuar funcionando apenas com LocalStorage. Para persistência real em SQLite, utilize o backend (NestJS) para expor endpoints que acessem o arquivo `data/app.db`.

## ⚙️ Persistência de Dados

- Sem backend: os dados ficam no `LocalStorage` do navegador (modo demo/offline).
- Com backend (NestJS): os dados persistem no `SQLite` (`data/app.db`).

## 🏗️ Estrutura do Projeto

```
rotinaDiaria-main/
├── index.html
├── script.js
├── styles.css
├── supabaseClient.js        # (legado) não utilizado com SQLite
├── check-activities.html
├── config.js                # (legado) não utilizado com SQLite
├── package.json
├── frontend/                # App React (opcional)
│   ├── package.json
│   ├── src/
│   └── vite.config.js
└── backend/                 # NestJS (opcional)
    ├── package.json
    ├── src/
    └── tsconfig.json
```

## 🚀 Como Executar

### Opção A — Versão Estática (recomendada)

1. Instale o Node.js (se ainda não tiver).
2. Na raiz do projeto, execute:
   ```bash
   npm run start
   ```
   Isso abrirá o `index.html` com um servidor local (via `live-server`).

Alternativas:
- Abrir o arquivo `index.html` diretamente no navegador; ou
- Rodar um servidor estático: `npx http-server` e acessar http://localhost:8080

### Opção B — App React (frontend/)

1. Acesse a pasta do app React:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. Acesse a URL indicada pelo Vite (geralmente http://localhost:5173).

> Observação: o app React é um experimento e pode não refletir todas as funcionalidades da versão estática.

### Opção C — Backend NestJS (backend/)

1. Acesse a pasta do backend:
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```
2. O servidor básico subirá em http://localhost:3000.
3. Configure o backend para usar o arquivo `data/app.db` (ex.: via ORM/biblioteca de SQLite). Caso precise, posso adicionar a configuração no NestJS usando `better-sqlite3`, `TypeORM` ou `Prisma`.

> Observação: o frontend estático não depende do backend NestJS. O backend é uma base para incluir APIs futuras.

## 📱 Como Usar (versão estática)

- Abra a aba "Criar Rotina" para montar a agenda do dia a cada 30 minutos.
- Selecione atividades do catálogo. Você pode cadastrar novas, editar ou remover.
- Na aba "Visualizar Rotina", marque as tarefas concluídas e acompanhe seus “coins”.
- Sem backend: dados apenas no LocalStorage.
- Com backend: persistência no SQLite (coins, atividades e rotina).

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feature/sua-feature`
3. Commit: `git commit -m "feat: sua feature"`
4. Push: `git push origin feature/sua-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- Inspiração: A todas as crianças que merecem uma rotina mais divertida!
- Criação: 
  
  - ALISSON THALES FABRO
  - CINTIA MARA VIEIRA FRANCO
  - CLAUDIO EDUARDO CESARIO DE OLIVEIRA
  - JAQUELINE MICAELE MARIA SILVA
  - LUIZ FERNANDO DA SILVA PINTO
  - PITERSON MURILO BOSCOLO
  - RICARDO HENRIQUE CANEDO
  - TAIS ALVES SILVA RIBEIRO
  
  
  
  
  
  
  
  
