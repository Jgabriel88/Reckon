const express = require("express");
const router = express.Router();
const { getExpenses, getExpenseById } = require("../db/expense-queries");

// const otherRouter = require('./more-routes/something');
// GET /products/pins/...
// router.use('/pins', otherRouter);

// GET /maps/7/pins/42
// router.get('/:id/pins/:pin_id', () => {});

// router-specific middleware
router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   res.redirect('/login');
  // }

  console.log("the expense router has been called");
  next();

  // longrunningProcess().then(() => {
  //   next();
  // });
});

// GET /expenses/
router.get("/", (req, res) => {
  getExpenses().then((expenses) => {
    res.json(expenses);
  });
});

// GET /expenses/:id
router.get("/:id", (req, res) => {
  getExpenseById(req.params.id).then((expense) => {
    res.json(expense);
  });
});

module.exports = router;
