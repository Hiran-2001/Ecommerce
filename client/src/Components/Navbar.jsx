import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Utils/Responsive"
const Container = styled.div`
  height: 60px;
  box-shadow: 0px 1px 25px black;
  ${mobile({height:"50px"})}
  /* background-color:black; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  /* background-color: red; */
  ${mobile({width:"10%"})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({marginLeft:"0px",marginRight:"0px"})}
`;
const Logo = styled.div`
  font-weight: bold;
  margin-left: 15px;
  ${mobile({fontSize:"24px",marginLeft:"5px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:"center",marginLeft:"0px",marginRight:"10px"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px",marginLeft:"10px",display:"flex"})}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: solid 0.3px gray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  height: 25px;
  ${mobile({marginLeft:"5px"})}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 35vw;
  height: 30px;
  ${mobile({width:"100px"})}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Logo>RcR</Logo>
        </Left>
        <Center>
         
          <SearchContainer>
            <Input  placeholder="Search"/>
            <Search  style={{color:"gray",fontSize:25}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
