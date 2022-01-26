import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { postLogin, postSocialLogin } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserId, setSocialType } from "../action";

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
  const dispatch = useDispatch();

  const [isfullfilled, setIsFullfiled] = useState(true);
  const [invalid, setInvalid] = useState(true);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const state = useSelector((state) => state.allReducer);
  const url = new URL(window.location.href);

  const code = url.searchParams.get("code");

  const getSocial = async () => {
    const id = await postSocialLogin(state.socialType, code);

    localStorage.setItem("userId", id);

    localStorage.setItem("isLogin", true);
  };

  useEffect(() => {
    if (code) {
      getSocial();
    }
  }, []);

  const getUser = async () => {
    const { email, password } = loginInfo;
    const {
      data,
      data: {
        userInfo: { id },
      },
    } = await postLogin({ email, password });
    console.log("@@@@");
    console.log(id);
    localStorage.setItem("userId", id);
    dispatch(setUserId(id));

    return data;
  };
  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleResponseSuccess = () => {
    dispatch(setLogin(true));
    localStorage.setItem("isLogin", true);
    navigate("/");
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      return setIsFullfiled(false);
    }

    try {
      const data = await getUser();
      console.log(data);
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
          <OauthButton
            onClick={() => {
              localStorage.setItem("socialType", "google");
              dispatch(setSocialType("google"));
            }}
            href="https://accounts.google.com/o/oauth2/v2/auth?client_id=849456230902-bbj8hno72k1hhlciunde3nc0knp6i28m.apps.googleusercontent.com&redirect_uri=http://ssokbeer-bucket-depoly.s3-website.ap-northeast-2.amazonaws.com/login&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email"
          >
            <i className="fab fa-google"></i>
            Google로 로그인
          </OauthButton>
          <OauthButton
            onClick={() => {
              localStorage.setItem("socialType", "github");
              dispatch(setSocialType("github"));
            }}
            href="https://github.com/login/oauth/authorize?client_id=46fe43a8dc9c1ac97714&scope=user:email"
          >
            <i className="fab fa-github"></i>
            Github로 로그인
          </OauthButton>
        </ButtonContainer>
      </ButtonForm>
    </Container>
  );
};

export default Login;
