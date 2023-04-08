import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../Utils/Responsive'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: coral; */
position: relative;
overflow: hidden;
${mobile({display:"none"})}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
`


const Wrapper = styled.div`
height: 100%;
/* background-color: red; */
/* width: 10vw; */
display: flex;
/* justify-content: space-between; */
/* align-items: center; */
`
const Slide = styled.div`
display: flex;
align-items:center;
width: 100vw;
height: 100vh;
justify-content: center;
background-color: ${props => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height:100%;
  width: 100%;
`

const Image = styled.img`
height: 100%;
width: auto;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 40px;
`
const Desc = styled.p`
margin: 50px 0px;
font-weight: 500;
`
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 color: black;
 border: .1 solid red;
 cursor: pointer;
`

function Slider() {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined>

                </ArrowLeftOutlined>
            </Arrow>
            <Wrapper>
            </Wrapper>
            <Slide bg="whitesmoke">

                <ImgContainer>
                    <Image src='https://newdocer.cache.wpscdn.com/photo/20211126/63cc8aea52a34e85bcfe5d59342f5b8f.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>Buy items above 500 & Get flat 50% off on next purchase</Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            {/* <Slide>

                    <ImgContainer>
                        <Image src='https://static.toiimg.com/thumb/msid-78567790,resizemode-4,width-1200,height-900/78567790.jpg' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>Buy items above 500 Get flat 50% off on next purchase</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide>

                    <ImgContainer>
                        <Image src='https://static.toiimg.com/thumb/msid-78567790,resizemode-4,width-1200,height-900/78567790.jpg' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>Buy items above 500 Get flat 50% off on next purchase</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide> */}
            <Arrow direction="right">
                <ArrowRightOutlined>

                </ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider