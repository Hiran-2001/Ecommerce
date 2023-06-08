import styled from "styled-components";
import { mobile } from "../Utils/Responsive";
// import { loginStart } from "../redux/userSlice";
import { useState } from "react";
// import { login } from "../redux/apiCalls";
// import { useDispatch } from "react-redux";
// import usePost from "../Hooks/usePost";
import axios from "axios";
import Alert from "@mui/material/Alert";

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
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
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const setUser = (e) => {
    const { name, value } = e.target;

    setUserLogin(() => {
      return {
        ...userLogin,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("red");
  
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input type="email" placeholder="email" onChange={setUser}  />
          <Input
            placeholder="Password"
            type="password"
            onChange={setUser}
            // value={userLogin.password}
          />

          <Button onClick={()=>handleLogin()}>Login</Button>
          <Link>Forgot Password</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
