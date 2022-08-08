const express = require("express")
const router = express.Router()
const { ensureAuth, ensureGuest } = require("../middleware/auth")
//Login/Landing Page
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  })
})

//Dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  res.render("dashboard")
})

module.exports = router
