import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

axios.defaults.withCredentials = true;

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
`;

const WelcomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px 0px;
  /* border: 1px solid red; */
  height: 100px;
`;

const WelcomeTitle = styled.div`
  text-align: center;
  width: 390px;
  font-size: 25px;
  margin: 10px 0px;
  /* border: 1px solid blue; */
`;

const WelcomeText = styled.div`
  width: 60%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
`;

const Button = styled.button`
  margin: 10px;
  width: 70px;
  height: 30px;
  border-radius: 10%;
  background-color: ${(props) => (props.pc ? "white" : "#fed969")};
  margin: 10px 0px 10px 0px;
  cursor: grab;
`;

const Screen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 40px;
  width: 700px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
const LoginInput = styled.input`
  text-decoration: none;
  border: none;
  padding: 20px 0px;
  font-size: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const SignUp = styled.div`
  text-align: center;
  font-size: 13px;
  margin-bottom: 30px;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  cursor: grab;
`;

const ButtonForm = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  max-width: 280px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const OauthButton = styled.a`
  all: unset;
  color: black;
  cursor: pointer;
  background-color: #ef463a;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: 0.4s;
  color: black;
  border-radius: 5px;
  i {
    padding: 10px;
  }
  &:hover {
    background-color: rgb(239, 70, 58, 0.4);
  }

  &:last-child {
    color: rgb(242, 242, 242);
    background-color: #181516;
    &:hover {
      background-color: rgb(25, 25, 25, 0.4);
    }
  }
`;

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    axios.get(`http://localhost:4000/user`).then((res) => {
      console.log(res);
      setIsLogin(true);
      //토큰 인증..? //
    });
  };
  const handleLogin = () => {
    axios
      .post(`http://localhost:4000/user/login`, {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then(() => {
        handleResponseSuccess();
      });
  };

  const isPc = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Container>
      <WelcomeHeader>
        <WelcomeTitle>Welcome to SSOKBEER !</WelcomeTitle>
        <WelcomeText>쏙비어 회원이신분들은</WelcomeText>
        <WelcomeText>아이디와 비밀번호를 입력해주세요</WelcomeText>
      </WelcomeHeader>
      <Screen>
        <LoginForm>
          <LoginInput
            type="text"
            placeholder="Email"
            onChange={handleInputValue("email")}
          ></LoginInput>
          <LoginInput
            type="password"
            placeholder="Password"
            onChange={handleInputValue("password")}
          ></LoginInput>
          <Button type="submit" onClick={handleLogin} pc={isPc}>
            로그인
          </Button>
          <SignUpLink to="/signup">
            <SignUp>아직 회원이 아니신가요?</SignUp>
          </SignUpLink>
        </LoginForm>
      </Screen>
      <ButtonForm>
        <ButtonContainer>
          <OauthButton>
            <i class="fab fa-google"></i>
            Google로 로그인
          </OauthButton>
          <OauthButton>
            <i class="fab fa-github"></i>
            Github로 로그인
          </OauthButton>
        </ButtonContainer>
      </ButtonForm>
    </Container>
  );
};
export default Login;
