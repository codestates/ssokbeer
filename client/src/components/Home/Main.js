import React from "react";
import styled from "styled-components";
import Illustration from "../../img/main.jpeg";
import wineImg from "../../img/wine.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const WineImg = styled.img`
  width: 100%;
`;

const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: white;
  height: 450px;
`;

const Content = styled.div`
  width: 100%;
  font-size: 20px;
  color: #444444;
  text-align: center;
  margin: 0px 20px;
  /* border: 1px solid red; */
`;

const ReviewBox = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 500px;
  /* border: 1px solid blue; ; */
`;

const Main = () => {
  return (
    <Container>
      <WineImg src={wineImg} />
      <Introduce>
        <Content>다양한 주류에 걸맞는</Content>
        <Content>완벽한 궁합을 제시합니다</Content>
      </Introduce>
      <Image src={Illustration} />
      <ReviewBox>
        <Introduce>
          <Content>쏙비어 회원님들과 함께 해볼까요?</Content>
        </Introduce>
      </ReviewBox>
    </Container>
  );
};

export default Main;
