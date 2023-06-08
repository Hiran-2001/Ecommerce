import styled from "styled-components";
import { mobile } from "../Utils/Responsive";
// import { loginStart } from "../redux/userSlice";
import { useState } from "react";
// import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
// import usePost from "../Hooks/usePost";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Alert from "@mui/material/Alert";
import { LOGIN_REQUEST } from "../redux/Types";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/3d-illustration-smartphone-with-products-coming-out-screen-online-shopping-e-commerce-concept_58466-14529.jpg")
      center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
`;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 15px 20px;
  background-color: black;
  cursor: pointer;
  margin-bottom: 10px;
  color: white;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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

  const handleLogin = async (event) => {
    event.preventDefault()
    dispatch({
      type: LOGIN_REQUEST,
      payload: inputValue,
      navigate: navigate
    })
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Form.Group id="formGroup" className="mb-3" >

            <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.email} name="email" className='formControl' type="email" placeholder="Email" />

          </Form.Group>

          <Form.Group style={{ display: "flex" }} className="mb-3" >

            <Form.Control style={{ width: "90%", margin: "10px 0px", padding: "10px" }} autoComplete='off' onChange={setValue} value={inputValue.password} name="password" className='formControl' type="password" placeholder="Password" />



          </Form.Group>
          <Button onClick={handleLogin} >Login</Button>
          <Link>Forgot Password</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
