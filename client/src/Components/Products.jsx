import styled from "styled-components";
import { popularProducts } from "../assets/Datas";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  justify-content: space-between;
`;
const Products = ({ cat, filter, price, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(cat ? `/api/products/all?category=${cat}` :  "api/products/all");
        setProducts(response.data)
        console.log(response);
      } catch (error) {}
    };
    getProduct();
  }, [cat]);



  useEffect(()=>{

  })
  return (
    <Container>
      {popularProducts.map((items) => {
        return <Product item={items} key={items.id} />;
      })}
    </Container>
  );
};

export default Products;
