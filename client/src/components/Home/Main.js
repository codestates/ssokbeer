import React from "react";
import styled from "styled-components";
import Illustration from "../../img/main.jpeg";
import wineImg from "../../img/wine.jpg";
import Review from "./Review";
import Findingmen from "../../img/men.png";
import Findingwomen from "../../img/find2.png";
import { Link } from "react-router-dom";

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
  align-items: center;
  width: 100%;
  background-color: white;
  height: 450px;
`;

const Content = styled.div`
  width: 100%;
  font-size: 20px;
  color: #444444;
  text-align: center;

  /* border: 1px solid red; */
`;

const Div = styled.div`
  width: 100%;
  font-size: 16px;
  color: #444444;
  text-align: center;
  /* border: 1px solid black; */
`;

const Communitypage = styled(Link)`
  width: 100%;
  font-size: 16px;
  color: #f1c232;
  text-align: center;
  margin: 50px 0px;
  text-decoration: none;
`;

const ReviewBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  margin: 200px;
`;

const Img = styled.img`
  width: 30%;
  height: 100%;
`;
const Img2 = styled.img`
  width: 30%;
  height: 100%;
  float: right;
`;
const Main = () => {
  return (
    <Container>
      <WineImg src={wineImg} />
      <Introduce>
        <Content>다양한 주종에 걸맞는</Content>
        <Content>완벽한 궁합을 제시합니다</Content>
      </Introduce>
      <Image src={Illustration} />
      <ReviewBox>
        <Review></Review>
      </ReviewBox>
      {/* <WineImg src={wineImg} /> */}
      <div>
        <Img src={Findingwomen}></Img>
      </div>
      <Div>수많은 쏙비어 회원님들이</Div>
      <Div>추천해주신 맛집과 레시피</Div>
      <Div>한번 구경해볼까요?</Div>
      <Communitypage to="/community">
        커뮤니티 가기 <i className="fas fa-chevron-right"></i>
      </Communitypage>

      <div>
        <Img2 src={Findingmen}></Img2>
      </div>
    </Container>
  );
};

export default Main;
