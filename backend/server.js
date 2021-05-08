require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const expenseRouter = require("./routes/expense-router");
const incomeRouter = require("./routes/income-router");
const accountRouter = require("./routes/account-router");

// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const db = require("./db");

const connection = require("./db/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/expenses", expenseRouter);
app.use("/incomes", incomeRouter);
app.use("/accounts", accountRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
