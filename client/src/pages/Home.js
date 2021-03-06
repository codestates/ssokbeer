import React from "react";
import styled from "styled-components";
import Copyright from "../components/Home/Copyright";
import Main from "../components/Home/Main";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 73px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const Home = () => {
  return (
    <Container>
      <Main />
      <Copyright />
    </Container>
  );
};

export default Home;
