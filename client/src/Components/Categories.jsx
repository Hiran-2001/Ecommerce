import React from 'react'
import styled from 'styled-components'
import { categories } from "../assets/Datas"
import CategoryItems from './CategoryItems'
import { mobile } from '../Utils/Responsive'


const Container = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
padding: 20px;
row-gap: 25px;
justify-content: space-between;
/* background-color: red; */
margin-top: 10px;
height: 100%;
${mobile({padding:"0px",display:"flex",flexDirection:"column"})}
`
function Categories() {
  return (
    <Container>
      {
        categories.map(items => {
          return (

            <CategoryItems item={items} />
          )
        })
      }
    </Container>
  )
}

export default Categories