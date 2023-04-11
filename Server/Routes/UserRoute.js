const router = require("express").Router();

router.get('/user',(req,res)=>{
    res.send("User Responce")
})

module.exports = router