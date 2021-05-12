INSERT INTO expenses 
(user_id, account_id, category, date, amount_cents, payee, notes) 
VALUES 
(1, 1, 'Bank Fees', now() - interval '5 month', 3500, 'RBC', 'Bank Fees for the month'),
(1, 1, 'Supplies', now() - interval '5 month', 90000, 'Staples', 'Receipt rolls for the month'),
(1, 1, 'Payroll', now() - interval '5 month', 380000, 'Payroll', 'Payroll for the month'),
(1, 1, 'Insurance', now() - interval '4 month', 250000, 'StateFarm Insurance', 'Biyearly Insurance'),
(1, 1, 'Bank Fees', now() - interval '4 month', 4200, 'RBC', 'Bank Fees for the month'),
(1, 1, 'Supplies', now() - interval '4 month', 90000, 'Staples', 'Receipt rolls for the month'),
(1, 1, 'Payroll', now() - interval '4 month', 450000, 'Payroll', 'Payroll for the month'),
(1, 1, 'Supplies', now() - interval '3 month', 2400000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Bank Fees', now() - interval '3 month', 2800, 'RBC', 'Bank Fees for the month'),
(1, 1, 'Utilities', now() - interval '3 month', 35000, 'Toronto Hydro', 'Monthly Hydro Bill'),
(1, 1, 'Payroll', now() - interval '3 month', 390000, 'Payroll', 'Payroll for the month'),
(1, 1, 'Supplies', now() - interval '2 month', 75000, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Bank Fees', now() - interval '2 month', 3300, 'RBC', 'Bank Fees for the month'),
(1, 1, 'Utilities', now() - interval '2 month', 28000, 'Toronto Hydro', 'Monthly Hydro Bill'),
(1, 1, 'Meals', now() - interval '2 month', 15000, 'Restaurants', 'Money spent in meals for the month'),
(1, 1, 'Payroll', now() - interval '2 month', 359000, 'Payroll', 'Payroll for the month'),
(1, 1, 'Supplies', now() - interval '1 month', 35800, 'Staples', 'Packaging supply run for the week'),
(1, 1, 'Supplies', now() - interval '1 month', 85000, 'Shoppers', 'Receipt rolls'),
(1, 1, 'Bank Fees', now() - interval '1 month', 2900, 'RBC', 'Bank Fees for the month'),
(1, 1, 'Utilities', now() - interval '1 month', 31200, 'Toronto Hydro', 'Monthly Hydro Bill'),
(1, 1, 'Payroll', now() - interval '1 month', 425000, 'Payroll', 'Payroll for the month');