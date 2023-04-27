import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
// import Announcement from "../Components/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Utils/Responsive";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";
import useGet from "../Hooks/useGet";
import {  addToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  /* box-shadow: 0px 1px 5px black; */
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  box-shadow: 0px 1px 5px black;
  border-radius: 5px;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0 5px;
//   cursor: pointer;
// `;
// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
//   border-radius: 5px;
// `;
// const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
`;

function ProductPage() {
  const productId = useParams();
  // console.log(productId.id);
  const [quantity, setQuantity] = useState(1);

  const [data] = useGet(`/api/products/${productId.id}`);
  const dispatch = useDispatch();
  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  

  return (
    <Container>
      {/* <Announcement /> */}
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image style={{objectFit:"contain"}} src={data.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{data.title}</Title>
          <Desc>{data.desc}</Desc>
          <Price> ₹ {data.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : {data.color}</FilterTitle>
              {/* <FilterColor color="Black" />
              <FilterColor color="Blue" />
              <FilterColor color="Red" /> */}
            </Filter>

            <Filter>
              <FilterTitle>Size : {data.size}</FilterTitle>
              {/* <FilterSize>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
              </FilterSize> */}
            </Filter>
          </FilterContainer>
          <AddContainer>
            {/* <AmountContainer>
              <Remove
                onClick={() => {
                  handleQuantity("dec");
                }}
                name="remove"
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => {
                  handleQuantity("inc");
                }}
                name="add"
                style={{ cursor: "pointer" }}
              />
            </AmountContainer> */}
            <Button onClick={()=>dispatch(addToCart(data))}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default ProductPage;
