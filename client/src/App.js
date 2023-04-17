import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { Routes, Route  } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={ <Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
   
    </div>
  );
}

export default App;
