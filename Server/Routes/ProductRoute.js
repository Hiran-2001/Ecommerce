const {
  createProduct,
  updateProduct,
  getAllProducts,
  deleteProducts,
  getSingleProducts,
} = require("../Controllers/productController");
const { isAuthorizedUser, isAuthenticated } = require("../Middleware/auth");

const router = require("express").Router();

router.post("/create", isAuthenticated, isAuthorizedUser, createProduct);
router.put("/update/:id", isAuthenticated, isAuthorizedUser, updateProduct);
router.delete("/delete/:id", isAuthenticated, isAuthorizedUser, deleteProducts);
router.get("/all", getAllProducts);
router.get(
  "/:id",
//   isAuthenticated,
  getSingleProducts
);
module.exports = router;
