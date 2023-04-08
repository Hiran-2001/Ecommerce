import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../Utils/Responsive'


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 200;
text-align:center;
`
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
`

const TopButton = styled.button`
font-weight: 600;
padding: 20px;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "tranparent"};
color: ${(props) => props.type === "filled" && "white"};
border-radius: 5px;


`
const TopTexts = styled.div`
${mobile({display:"none"})}
`
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0px 30px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`
const Info = styled.div`
 flex:3;
`

const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection:"column"})}
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  /* background-color:red; */
`
const Image = styled.img`
 width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`
 display: flex;
 justify-content: space-between;
`
const ProductId = styled.span`

`
const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};

`
const ProductSize = styled.span`

`
const PriceDetails = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 /* background-color: red; */
`

const ProductAmountContainer = styled.div`
 display: flex;
 margin-bottom: 20px;
 align-items: center;
`
const ProductAmount = styled.div`
font-size: 25px;
text-align: center;
margin: 5px;
${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
 font-size: 30px;
 font-weight: 200;
 ${mobile({fontWeight:"100",marginBottom:"20px"})}
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid black;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h3`
font-weight: 200;

`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: 200 ;
`
const SummaryItemText = styled.span`


`
const SummaryPrice = styled.span`


`
const Button = styled.button`
 
 border: 2px solid black;
 background-color: white;
 padding: 10px;
 width: 100%;
 border-radius: 5px;
 font-weight: 600;

 &:hover{
    background-color: black;
    color: white;
    transition: all .2s ease;
 }
`
function Cart() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>

                    <TopButton>Checkout Now</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>Continue Shopping</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81lT4MLDvjL._SX522_.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b>Nivea Boot</ProductName>
                                    <ProductId><b>ID:</b>465164114616</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b>8 inch</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 300</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <hr style={{ marginBottom: "10px" }} />
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.beyoung.in/api/cache/catalog/products/cargo_joggers/sage_green_cargo_men_jogger_pants_base_14_1_2023_700x933.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b>Pant</ProductName>
                                    <ProductId><b>ID:</b>465164114616</ProductId>
                                    <ProductColor color="#A9BA9D" />
                                    <ProductSize><b>Size:</b>38</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>
                                        1
                                    </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 70</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                SubTotal
                            </SummaryItemText>
                            <SummaryPrice>
                                $ 80
                            </SummaryPrice>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryPrice>
                                $ 5.2
                            </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>
                                Shipping Discount
                            </SummaryItemText>
                            <SummaryPrice>
                                $ -20
                            </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText type="total">
                               Total
                            </SummaryItemText>
                            <SummaryPrice>
                                $ 65.2
                            </SummaryPrice>
                        </SummaryItem>

                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart