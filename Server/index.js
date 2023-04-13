const express = require("express");
const connectionToDB = require("./Config/Conn");
const app = express();
const dontenv = require("dotenv")
const cookieParser = require('cookie-parser');

dontenv.config()
connectionToDB();
app.use(express.json())
app.use(cookieParser())
const ProductRoutes = require("./Routes/ProductRoute");
const UserRoutes = require("./Routes/UserRoute");

app.use('/api/products',ProductRoutes)
app.use('/api/user',UserRoutes)
// app.use('/api',OrderRoute)
// app.use('/api',CartRoute)



app.listen(process.env.PORT,()=>{
    console.log("Backend connected");
   
})