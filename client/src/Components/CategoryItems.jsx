import React from "react";
import styled from "styled-components";
import { mobile } from "../Utils/Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 70vh;
  position: relative;
  /* background-color: red; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
`;
function CategoryItems({ item }) {
  return (
    <Container>
      <Image  src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
          <Button>Shop Now</Button>
        </Link>
      </Info>
    </Container>
  );
}

export default CategoryItems;
