INSERT INTO expenses 
(user_id, account_id, category, sub_category, date, amount_cents, payee, notes) 
VALUES 
(1, 1, 'Supplies', 'Packaging', now() - interval '5 month', 2900000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '5 month', 1500000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '5 month', 50450000, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '4 month', 1800000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '4 month', 2100000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '4 month', 20450000, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '3 month', 2400000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '3 month', 1920000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '3 month', 21450000, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '2 month', 2000000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '2 month', 1800000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '2 month', 21000000, 'Payroll', 'Payroll for the week'),
(1, 1, 'Supplies', 'Packaging', now() - interval '1 month', 1000000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', now() - interval '1 month', 1700000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', now() - interval '1 month', 21000000, 'Payroll', 'Payroll for the week');
INSERT INTO expenses 
(user_id, account_id, category, sub_category, amount_cents, payee, notes) 
VALUES 
(1, 1, 'Supplies', 'Packaging', 1500000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', 'POS', 1500000, 'Staples', 'Receipt rolls'),
(1, 1, 'Supplies', 'Payroll', 20000000, 'Payroll', 'Payroll for the week');
