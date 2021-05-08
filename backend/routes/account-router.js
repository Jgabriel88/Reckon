const express = require("express");
const router = express.Router();
const { getAccounts, getAccountsById } = require("../db/account-queries");

// GET /accounts/
router.get("/", (req, res) => {
  getAccounts().then((accounts) => {
    res.json(accounts);
  });
});

// GET /accounts/:id
router.get("/:id", (req, res) => {
  getAccountsById(req.params.id).then((account) => {
    res.json(account);
  });
});

module.exports = router;
