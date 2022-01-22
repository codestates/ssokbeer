import React from "react";
import styled from "styled-components";
import drinkPic from "../../img/main.jpeg";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border: 2px solid red;
`;
const MainImg = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <Container>
      <MainImg src={drinkPic} />
    </Container>
  );
};

export default Main;
