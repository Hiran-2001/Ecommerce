const { payment } = require("../Controllers/paymentController");
const { isAuthenticated} = require("../Middleware/auth");
const router = require("express").Router();

// router.post("/payment",isAuthenticated,payment)
router.post("/payment", isAuthenticated, payment);

module.exports = router;
