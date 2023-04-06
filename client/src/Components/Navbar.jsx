import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
  height: 60px;
  /* background-color:black; */
  box-shadow: 0px 1px 25px black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: solid 0.3px gray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  height: 25px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 35vw;
  height: 30px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search  style={{color:"gray",fontSize:25}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RcR</Logo>
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
