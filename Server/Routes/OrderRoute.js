const { createOrder, updateOrder, deleteOrder, userOrders, income } = require("../Controllers/orderController");
const { isAuthenticated, isAuthorizedUser } = require("../Middleware/auth");

const router = require("express").Router();

router.post('/create' ,isAuthenticated ,createOrder)
router.put('/update/:id' ,isAuthenticated,isAuthorizedUser ,updateOrder)
router.delete('/delete/:id' ,isAuthenticated,deleteOrder)
router.get('/all' ,isAuthenticated,userOrders)
router.get('/income' ,isAuthenticated,isAuthorizedUser ,income)

module.exports = router 