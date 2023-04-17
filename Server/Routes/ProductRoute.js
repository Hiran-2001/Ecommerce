const { createProduct, updateProduct, getAllProducts, deletProducts, getSinlgeProducts } = require("../Controllers/productController");
const { isAuthorizedUser, isAuthenticated } = require("../Middleware/auth");

const router = require("express").Router();

router.post('/create',isAuthenticated,isAuthorizedUser,  createProduct)
router.put('/update/:id',isAuthenticated,isAuthorizedUser,  updateProduct)
router.delete('/delete/:id',isAuthenticated,isAuthorizedUser,  deletProducts)
router.get('/all', getAllProducts)
router.get('/:id',isAuthenticated, getSinlgeProducts)
module.exports = router