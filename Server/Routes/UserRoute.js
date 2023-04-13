const { register, login, update, logout } = require("../Controllers/UserController");
const {  isAuthorizedUser, isAuthenticated } = require("../Middleware/auth");

const router = require("express").Router();

router.post("/register",register)
router.post("/login",login)
router.get("/logout", logout)
router.put("/update/:id", isAuthenticated, update)

module.exports = router     