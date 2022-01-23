import React from "react";
import styled from "styled-components";
import Copyright from "../components/Home/Copyright";
import Main from "../components/Home/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 78px;
  width: 100%;
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
