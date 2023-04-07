import styled from "styled-components"

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/free-photo/3d-illustration-smartphone-with-products-coming-out-screen-online-shopping-e-commerce-concept_58466-14529.jpg") center;
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
`
const Wrapper = styled.div`
width: 40%;
 padding: 20px;
 background-color: white;
`
const Title = styled.h1`
font-size: 25px;
font-weight: 400;
`
const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
 font-size: 12px;
 margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: 1px solid black;
padding: 15px 20px;
background-color: white;
cursor: pointer;
`

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By continuing, you agree to FutureCart's Conditions of Use and Privacy Notice.</Agreement>
                    <Button>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register