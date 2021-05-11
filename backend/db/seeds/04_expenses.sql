INSERT INTO expenses 
(user_id, account_id, category, sub_category, date, amount_cents, payee, notes) 
VALUES 
(1, 1, 'Supplies', 'Packaging', now() - interval '5 month', 29000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '5 month', 15000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '5 month', 504500, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '4 month', 18000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '4 month', 21000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '4 month', 204500, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '3 month', 24000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '3 month', 19200, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '3 month', 214500, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '2 month', 20000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '2 month', 18000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '2 month', 210000, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '1 month', 10000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '1 month', 17000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '1 month', 210000, 'Payroll', 'Payroll for the week');
INSERT INTO expenses 
(user_id, account_id, category, sub_category, amount_cents, payee, notes) 
VALUES 
(1, 1, 'Supplies', 'Packaging', 15000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', 15000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', 200000, 'Payroll', 'Payroll for the week');
