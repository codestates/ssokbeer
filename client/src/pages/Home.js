import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postSocialLogin, sociaLogin } from "../api";
import Copyright from "../components/Home/Copyright";
import Main from "../components/Home/Main";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setSocialType, setUserId } from "../action";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 73px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allReducer);

  const url = new URL(window.location.href);

  const code = url.searchParams.get("code");

  const getSocial = async () => {
    const id = await postSocialLogin(localStorage.getItem("socialType"), code);

    localStorage.setItem("userId", id);
    localStorage.setItem("isLogin", true);
    dispatch(setUserId(id));
    dispatch(setLogin(true));
  };

  useEffect(() => {
    // getSocial();
  }, []);

  return (
    <Container>
      <Main />
      <Copyright />
    </Container>
  );
};

export default Home;
