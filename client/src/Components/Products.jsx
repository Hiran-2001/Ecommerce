import styled from "styled-components";
import { popularProducts } from "../assets/Datas";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_REQUEST } from "../redux/Types";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  justify-content: space-between;
`;
const Products = ({ cat, filter, price, sort }) => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productStore = useSelector(store=>store.product)
  useEffect(() => {
    const getProduct = async () => {
      try {
        // const response = await axios.get(
        //   cat ? `/api/products/all?category=${cat}` : "api/products/all"
        // );
        dispatch({type :GET_PRODUCT_REQUEST,payload:cat})
      
        // console.log(productStore.data);
        setProducts(productStore.data)
        console.log(products);
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

  // console.log(filteredProducts);
  return (
    <Container>
      {products.map((items) => {
        return <Product  item={items} key={items.id} />;
      })}
    </Container>
  );
};

export default Products;
