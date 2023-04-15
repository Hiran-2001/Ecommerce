const { createOrder } = require("../Controllers/orderController");
const { isAuthenticated } = require("../Middleware/auth");

const router = require("express").Router();

router.post('/create' ,isAuthenticated ,createOrder)

module.exports = router