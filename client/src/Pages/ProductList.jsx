import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import { mobile } from "../Utils/Responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "20px", marginBottom: "5px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Options = styled.option``;

function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
 console.log(category);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChange = (e) => {
    const value = e.target.value;

    setFilter({
        ...filter,
      [e.target.name]: value,
    });
  };



  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleChange}>
            <Options disabled selected>Color</Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Green</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
          </Select>

          <Select name="price" onChange={handleChange}>
            <Options disabled selected>Price</Options>
            <Options>50000+</Options>
            <Options>25000+</Options>
            <Options>20000+</Options>
            <Options>10000+</Options>
            <Options> -10000</Options>
          </Select>

          <Select name="size" onChange={handleChange}>
            <Options disabled>Size</Options>
            <Options>XXL</Options>
            <Options>XL</Options>
            <Options>L</Options>
            <Options>M</Options>
            <Options>S</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Options value="Newest">Newest</Options>
            <Options value="asc">Price (asc)</Options>
            <Options value="desc">Price(desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filter={filter} price={filter} sort={sort} />
    </Container>
  );
}

export default ProductList;
