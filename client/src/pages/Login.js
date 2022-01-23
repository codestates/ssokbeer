import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

axios.defaults.withCredentials = true;

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
`;

const WelcomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px 0px;

  height: 100px;
`;

const WelcomeTitle = styled.div`
  text-align: center;
  width: 390px;
  font-size: 25px;
  margin: 10px 0px;
`;

const WelcomeText = styled.div`
  width: 60%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
`;

const Button = styled.button`
  margin: 40px 10px 10px 10px;
  width: 70px;
  height: 30px;
  border-radius: 10%;
  background-color: ${(props) => (props.pc ? "white" : "#fed969")};
  cursor: grab;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #eeeeee;
  }
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
  border-radius: 10px;
  background-color: white;
`;
const LoginInput = styled.input`
  width: 60%;
  text-decoration: none;
  border: none;
  padding: 20px 0px;
  font-size: 15px;
  border-bottom: ${(props) => (props.fullfilled ? "2px solid rgba(0, 0, 0, 0.2)" : "2px solid red")};
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

const Messagebox = styled.div`
  font-size: 14px;
  color: red;
`;

const Login = () => {
  const [isfullfilled, setIsFullfiled] = useState(true);
  const [invalid, setInvalid] = useState(true);
  const [Login, setIsLogin] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    navigate("/drink");
    setIsLogin(true);
    localStorage.setItem("isLogin", true);
    window.location.reload();
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      return setIsFullfiled(false);
    }

    try {
      const data = await axios.post(`http://localhost:4000/user/login`, {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      if (data) {
        handleResponseSuccess(data);
      }
    } catch (err) {
      console.log(err.response);
      setInvalid(false);
    }
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
            placeholder={isfullfilled ? "Email" : "이메일을 입력해주세요"}
            fullfilled={isfullfilled}
            onChange={handleInputValue("email")}
          ></LoginInput>
          {invalid ? null : <Messagebox>이메일을 다시 확인해주세요</Messagebox>}
          <LoginInput
            type="password"
            placeholder={isfullfilled ? "password" : "비밀번호를 입력해주세요"}
            fullfilled={isfullfilled}
            onChange={handleInputValue("password")}
          ></LoginInput>
          {invalid ? null : <Messagebox>비밀번호를 다시 확인해주세요</Messagebox>}
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
            <i className="fab fa-google"></i>
            Google로 로그인
          </OauthButton>
          <OauthButton>
            <i className="fab fa-github"></i>
            Github로 로그인
          </OauthButton>
        </ButtonContainer>
      </ButtonForm>
    </Container>
  );
};
export default Login;
