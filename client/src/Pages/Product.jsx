import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from "../Components/Announcement"
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`

`
const Wrapper = styled.div`
 display: flex;
 padding: 50px;
`
const ImgContainer = styled.div`
 flex: 1;
 /* box-shadow: 0px 1px 5px black; */
 border-radius: 30px;
`
const Image = styled.img`
 width: 100%;
 height: 90vh;
 object-fit: cover;
 box-shadow: 0px 1px 5px black;
 border-radius: 30px;

`
const InfoContainer = styled.div`
 flex: 1;
 padding: 0px 50px;
 
`
const Title = styled.h1`
font-weight: 300;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
 margin-left: 10px;
 padding: 5px;
 border-radius: 5px;
    
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius:10px;
  border:1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`
const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
`

function Product() {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71uOHq0FUgL._UL1500_.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title> New Hop Shoe</Title>
                    <Desc>Care Instructions: Hand Wash Only
                        Fit Type: Regular Fit
                        Comfortable Lycra Fabric
                        Half Sleeve
                        Spread Collar
                        Printed Designer Shirt
                        Casual Wear Shirt</Desc>
                    <Price>$200</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black" />
                            <FilterColor color="Blue" />
                            <FilterColor color="Red" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                            </FilterSize>

                        </Filter>
                    </FilterContainer>
                    <AddContainer>

                        <AmountContainer>
                            <Remove style={{cursor:"pointer"}}/>
                            <Amount>1</Amount>
                            <Add style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product