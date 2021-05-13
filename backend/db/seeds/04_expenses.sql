INSERT INTO expenses 
(user_id, account_id, category, date, amount_cents, payee, notes) 
VALUES 
(1, 1, 'COGS', now() - interval '5 month', 350000, 'Walmart', 'Supplies for production December 2020'),
(1, 1, 'COGS', now() - interval '4 month', 420000, 'Walmart', 'Supplies for production January 2021'),
(1, 1, 'COGS', now() - interval '3 month', 390000, 'Walmart', 'Supplies for production February 2021'),
(1, 1, 'COGS', now() - interval '2 month', 380000, 'Walmart', 'Supplies for production March 2021'),
(1, 1, 'COGS', now() - interval '1 month', 400000, 'Walmart', 'Supplies for production April 2021'),
(1, 1, 'COGS', now(), 400000, 'Walmart', 'Supplies for production May 2021'),
(1, 1, 'Packaging', now() - interval '5 month', 120000, 'Staples', 'Packaging for products December 2020'),
(1, 1, 'Packaging', now() - interval '4 month', 150000, 'Staples', 'Packaging for products January 2021'),
(1, 1, 'Packaging', now() - interval '3 month', 170000, 'Staples', 'Packaging for products February 2021'),
(1, 1, 'Packaging', now() - interval '2 month', 110000, 'Staples', 'Packaging for products March 2021'),
(1, 1, 'Packaging', now() - interval '1 month', 100000, 'Staples', 'Packaging for products April 2021'),
(1, 1, 'Packaging', now(), 100000, 'Staples', 'Packaging for products May 2021'),
(1, 1, 'POS Supplies', now() - interval '5 month', 90000, 'Staples', 'Supplies for December 2020'),
(1, 1, 'POS Supplies', now() - interval '4 month', 50000, 'Staples', 'Supplies for January 2021'),
(1, 1, 'POS Supplies', now() - interval '3 month', 40000, 'Staples', 'Supplies for February 2021'),
(1, 1, 'POS Supplies', now() - interval '2 month', 60000, 'Staples', 'Supplies for March 2021'),
(1, 1, 'POS Supplies', now() - interval '1 month', 60000, 'Staples', 'Supplies for April 2021'),
(1, 1, 'POS Supplies', now(), 7000, 'Staples', 'Supplies for May 2021'),
(1, 1, 'Payroll', now() - interval '5 month', 680000, 'Payroll', 'Payroll for December 2020'),
(1, 1, 'Payroll', now() - interval '4 month', 420000, 'Payroll', 'Payroll for January 2021'),
(1, 1, 'Payroll', now() - interval '3 month', 415000, 'Payroll', 'Payroll for February 2021'),
(1, 1, 'Payroll', now() - interval '2 month', 398000, 'Payroll', 'Payroll for March 2021'),
(1, 1, 'Payroll', now() - interval '1 month', 439000, 'Payroll', 'Payroll for April 2021'),
(1, 1, 'Payroll', now(), 650000, 'Payroll', 'Payroll for May 2021'),
(1, 1, 'Bank Fees', now() - interval '5 month', 4200, 'RBC', 'Bank Fees for December 2020'),
(1, 1, 'Bank Fees', now() - interval '4 month', 3800, 'RBC', 'Bank Fees for January 2021'),
(1, 1, 'Bank Fees', now() - interval '3 month', 4500, 'RBC', 'Bank Fees for February 2021'),
(1, 1, 'Bank Fees', now() - interval '2 month', 3200, 'RBC', 'Bank Fees for March 2021'),
(1, 1, 'Bank Fees', now() - interval '1 month', 6200, 'RBC', 'Bank Fees for April 2021'),
(1, 1, 'Bank Fees', now(), 4900, 'RBC', 'Bank Fees for May 2021'),
(1, 1, 'Insurance', now() - interval '5 month', 55000, 'RBC', 'Insurance for December 2020'),
(1, 1, 'Insurance', now() - interval '4 month', 55000, 'RBC', 'Insurance for January 2021'),
(1, 1, 'Insurance', now() - interval '3 month', 55000, 'RBC', 'Insurance for February 2021'),
(1, 1, 'Insurance', now() - interval '2 month', 55000, 'RBC', 'Insurance for March 2021'),
(1, 1, 'Insurance', now() - interval '1 month', 55000, 'RBC', 'Insurance for April 2021'),
(1, 1, 'Insurance', now(), 55000, 'RBC', 'Insurance for May 2021'),
(1, 1, 'Utilities', now() - interval '5 month', 55000, 'Toronto Hydro', 'Utilities for December 2020'),
(1, 1, 'Utilities', now() - interval '4 month', 55000, 'Toronto Hydro', 'Utilities for January 2021'),
(1, 1, 'Utilities', now() - interval '3 month', 55000, 'Toronto Hydro', 'Utilities for February 2021'),
(1, 1, 'Utilities', now() - interval '2 month', 55000, 'Toronto Hydro', 'Utilities for March 2021'),
(1, 1, 'Utilities', now() - interval '1 month', 55000, 'Toronto Hydro', 'Utilities for April 2021'),
(1, 1, 'Utilities', now(), 55000, 'Toronto Hydro', 'Utilities for May 2021'),
(1, 1, 'General Expenses', now() - interval '5 month', 55000, 'Miscellaneous', 'General Expenses for December 2020'),
(1, 1, 'General Expenses', now() - interval '4 month', 55000, 'Miscellaneous', 'General Expenses for January 2021'),
(1, 1, 'General Expenses', now() - interval '3 month', 55000, 'Miscellaneous', 'General Expenses for February 2021'),
(1, 1, 'General Expenses', now() - interval '2 month', 55000, 'Miscellaneous', 'General Expenses for March 2021'),
(1, 1, 'General Expenses', now() - interval '1 month', 55000, 'Miscellaneous', 'General Expenses for April 2021'),
(1, 1, 'General Expenses', now(), 55000, 'Miscellaneous', 'General Expenses for May 2021');

