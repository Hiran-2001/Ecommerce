const mongoose = require("mongoose")

const connectionToDB=()=>{

    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected Successfully");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectionToDB;