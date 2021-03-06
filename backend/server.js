require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const expenseRouter = require('./routes/expense-router');
const incomeRouter = require('./routes/income-router');
const accountRouter = require('./routes/account-router');
const billRouter = require('./routes/bills-router');
const balanceRouter = require('./routes/balance-router');
const reportRouter = require('./routes/report-router');

// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const db = require("./db");

const connection = require('./db/db');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use('/api/expenses', expenseRouter);
app.use('/api/incomes', incomeRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/bills', billRouter);
app.use('/api/balances', balanceRouter);
app.use('/api/reports', reportRouter);

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
