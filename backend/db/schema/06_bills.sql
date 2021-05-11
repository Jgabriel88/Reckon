DROP TABLE IF EXISTS bills CASCADE;
CREATE TABLE bills (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  amount_cents INTEGER NOT NULL,
  payee VARCHAR(255),
  due_date DATE,
  is_paid BOOLEAN DEFAULT false
); 