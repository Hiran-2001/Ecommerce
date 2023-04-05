import React from 'react'
import styled from 'styled-components'
import { Search } from "@mui/icons-material"

const Container = styled.div`
  height:60px;
  ${'' /* background-color:black; */}
`
const Wrapper = styled.div`
 padding:10px 20px;
 display :flex;
 justify-content:space-between;
`

const Left = styled.div`
flex:1;
display:flex;
`
const Center = styled.div`
flex:1;
`

const Right = styled.div`
flex:1;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border:solid .3px gray;
display:flex;
align-items:center ;
padding:5px;
margin-left:25px ;

`

const Input = styled.input`
border:none ;
outline:none

`






function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    center
                </Center>
                <Right>
                    Right
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
