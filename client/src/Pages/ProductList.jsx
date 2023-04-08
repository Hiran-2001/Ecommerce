import styled from "styled-components"
import Navbar from '../Components/Navbar'
import Announcement from "../Components/Announcement"
import Products from "../Components/Products"
import { mobile } from "../Utils/Responsive"

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
 margin: 20px;
 ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size:20px ;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "20px",marginBottom:"5px"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`
const Options = styled.option`
`
function ProductList() {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products
                    </FilterText>
                    <Select>
                        <Options disabled selected>Color</Options>
                        <Options>White</Options>
                        <Options>Black</Options>
                        <Options>Red</Options>
                        <Options>Green</Options>
                        <Options>Blue</Options>
                        <Options>Yellow</Options>
                    </Select>

                    <Select>
                        <Options disabled selected>Size</Options>
                        <Options>XXL</Options>
                        <Options>XL</Options>
                        <Options>L</Options>
                        <Options>M</Options>
                        <Options>S</Options>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                        <Options selected>Newest</Options>
                        <Options>Price (asc)</Options>
                        <Options>Price(desc)</Options>
                
                    </Select>
                    
                </Filter>
            </FilterContainer>
            <Products/>
        </Container>
    )
}

export default ProductList