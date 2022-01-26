import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postSocialLogin } from "../api";
import Copyright from "../components/Home/Copyright";
import Main from "../components/Home/Main";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 73px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const Home = () => {
  const state = useSelector((state) => state.allReducer);
  const url = new URL(window.location.href);

  const code = url.searchParams.get("code");

  const getSocial = async () => {
    const id = await postSocialLogin(state.socialType, code);

    localStorage.setItem("userId", id);

    localStorage.setItem("isLogin", true);
  };

  useEffect(() => {
    if (localStorage.getItem("socialType") && state.socialType) getSocial();
  }, []);

  return (
    <Container>
      <Main />
      <Copyright />
    </Container>
  );
};

export default Home;
