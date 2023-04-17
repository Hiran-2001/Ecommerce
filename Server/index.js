const express = require("express");
const connectionToDB = require("./Config/Conn");
const app = express();
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser');
const cors = require('cors')
dotenv.config()
connectionToDB();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const ProductRoutes = require("./Routes/ProductRoute");
const UserRoutes = require("./Routes/UserRoute");
const CartRoute = require("./Routes/CartRoute")
const OrderRoute = require("./Routes/OrderRoute")
const paymentRoute = require("./Routes/paymentRoute")
app.use('/api/products',ProductRoutes)
app.use('/api/user',UserRoutes)
app.use('/api/order',OrderRoute)
app.use('/api/cart',CartRoute)
app.use('/api/checkout',paymentRoute)


app.listen(process.env.PORT,()=>{
    console.log("Backend connected");
   
})