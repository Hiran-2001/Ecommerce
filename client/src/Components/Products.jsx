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
        const response = await axios.get(
          cat ? `/api/products/all?category=${cat}` : "api/products/all"
        );
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {}
    };
    getProduct();
  }, [cat]);

  // useEffect(()=>{
  //   if((sort)=== "asc"){
  //     setFilteredProducts((prev)=>{
  //       [...prev].sort((a,b)=> a.price - b.price)
  //     })
  //   }
  // },[sort])

  useEffect(() => {
    if (sort === "asc") {
      setFilteredProducts((prev)=>{
        [...prev].sort((a,b)=> a.price - b.price)
      })
    }
  }, [sort]);

  console.log(filteredProducts);
  return (
    <Container>
      {products.map((items) => {
        return <Product item={items} key={items.id} />;
      })}
    </Container>
  );
};

export default Products;
