

import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
/* background-color: rgba(0,0,0,0.2); */
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  max-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
  border-radius: 15px;

  &:hover ${Info}{
    opacity: 1;
    transition: all ease .5s;
  }
`

const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: white;
 position: absolute;
`
const Image = styled.img`
height:75%;
z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
  transition: all .5s ease;
  cursor: pointer;
  &:hover{
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
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
        </Container>
    )
}

export default Product