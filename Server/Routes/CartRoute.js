const { createCart, updateCart, deleteCart, getSingleItem, getItems } = require("../Controllers/cartController");
const { isAuthenticated, isAuthorizedUser } = require("../Middleware/auth");

const router = require("express").Router();

router.post('/create',isAuthenticated ,createCart)
router.put('/update/:id',isAuthenticated ,updateCart)
router.delete('/delete/:id',isAuthenticated ,deleteCart)
router.get('/items/:id',isAuthenticated ,getSingleItem)
router.get('/all',isAuthenticated,isAuthorizedUser ,getItems)


module.exports = router