const express = require("express");
const connectionToDB = require("./Config/Conn");
const app = express();
const dontenv = require("dotenv")
dontenv.config()
connectionToDB();
app.use(express.json())

const ProductRoutes = require("./Routes/ProductRoute");
const UserRoutes = require("./Routes/UserRoute");

app.use('/api',ProductRoutes)
app.use('/api',UserRoutes)
app.use('/api',OrderRoute)
app.use('/api',CartRoute)

app.listen(process.env.PORT,()=>{
    console.log("Backend connected");
   
})