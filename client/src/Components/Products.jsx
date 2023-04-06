

import styled from 'styled-components'
import { popularProducts } from '../assets/Datas'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
    {
        popularProducts.map(items=>{
            return (
                <Product item={items} key={items.id}/>
            )
        })
    }
    </Container>
  )
}

export default Products