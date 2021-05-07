DROP TABLE IF EXISTS budgets CASCADE;
CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE,
  type VARCHAR(255) NOT NULL,
  budget_amount INTEGER NOT NULL,
  budget_cycle VARCHAR DEFAULT 'monthly',
  cycle_start DATE
);