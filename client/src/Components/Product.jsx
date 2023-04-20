import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0,0,0,0.2); */
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  max-width: 280px;
  height: 350px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background-color: #f5f5f5;
  /* background-color: blue; */
  position: relative;
  border-radius: 15px;
  

  &:hover ${Info} {
    opacity: 1;
    transition: all ease 0.5s;
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  object-fit: contain;
  width: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  /* background-color: red; */
  height: 100px;
  border-radius: 0 0 15px 15px;
  /* padding-left: 40px; */
  padding-top: 5px;
  text-align: center;
  color: black;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`}>
        <Image src={item.image} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
        </Info>
        <Details>
          <h2 >{item.title}</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h4>₹ </h4>
            <h1>{item.price}</h1>
          </div>
        </Details>
      </Link>
    </Container>
  );
};

export default Product;
