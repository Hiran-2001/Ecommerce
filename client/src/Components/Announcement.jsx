import React from 'react'
import styled from "styled-components"


const Container = styled.div`
  height: 30px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight:500 ;
`
function Announcement() {
  return (
    <Container>
    Free Delivery for on week 
    </Container>
  )
}

export default Announcement