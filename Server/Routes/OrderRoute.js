const router = require("express").Router();

router.get('/order',(req,res)=>{
    res.send("User Responce")
})

module.exports = router