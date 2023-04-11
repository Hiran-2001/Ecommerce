const router = require("express").Router();

router.get('/product',(req,res)=>{
    res.send("Product Responce")
})

module.exports = router