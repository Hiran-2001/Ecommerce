const { register, login, update, logout, deleteUser, getUser } = require("../Controllers/UserController");
const {  isAuthorizedUser, isAuthenticated } = require("../Middleware/auth");

const router = require("express").Router();

router.post("/register",register)
router.post("/login",login)
router.get("/logout", logout)
router.put("/update/:id", isAuthenticated, update)
router.delete("/delete/:id", isAuthenticated, deleteUser)
router.get("/getuser", isAuthenticated, isAuthorizedUser, getUser)

module.exports = router     