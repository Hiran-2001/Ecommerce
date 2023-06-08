import styled from "styled-components"
import { mobile } from "../Utils/Responsive"
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { REGISTER_REQUEST } from "../redux/Types";

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
 ${mobile({ width: "75%", borderRadius: "5px" })}
`
const Title = styled.h1`
font-size: 25px;
font-weight: 400;
`
// const Form = styled.form`
//  display: flex;
//  flex-wrap: wrap;
//  justify-content: center;

// `
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
background-color: black;
color: white;
cursor: pointer;
${mobile({ width: "70%", })}
`

function Register() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    console.log(inputValue);

    const setValue = (e) => {
        //  console.log(e.target.value);
        const { name, value } = e.target;
        setInputValue(() => {
            return {
                ...inputValue,
                [name]: value,
            };
        });
    };

    const handleRegistration = async (event) => {
        event.preventDefault()
        dispatch({
            type: REGISTER_REQUEST,
            payload: inputValue,

        })
    };
    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form style={{ display: "flex", flexDirection: "column" }}>
                    {/* <Input placeholder="First Name" /> */}
                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.firstName} name="firstName" className='formControl' type="text" placeholder="First Name" />

                    </Form.Group>

                    {/* <Input placeholder="Last Name" /> */}

                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.lastName} name="lastName" className='formControl' type="text" placeholder="Last Name" />

                    </Form.Group>

                    {/* <Input placeholder="Username" /> */}
                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.username} name="username" className='formControl' type="text" placeholder="Username" />

                    </Form.Group>
                    {/* <Input placeholder="Email" /> */}
                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.email} name="email" className='formControl' type="email" placeholder="Email" />

                    </Form.Group>

                    {/* <Input placeholder="Password" /> */}

                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.password} name="password" className='formControl' type="password" placeholder="Password" />

                    </Form.Group>


                    {/* <Input placeholder="Confirm Password" /> */}

                    <Form.Group id="formGroup" className="mb-3" >

                        <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.confirmPassword} name="confirmPassword" className='formControl' type="password" placeholder="Confirm Password" />

                    </Form.Group>
                    <Agreement>By continuing, you agree to FutureCart's Conditions of Use and Privacy Notice.</Agreement>
                    <Button onClick={handleRegistration}>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register