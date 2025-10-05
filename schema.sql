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