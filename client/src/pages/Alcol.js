import React from "react";
import styled from "styled-components";
import Slider from "../components/Alcol/Slider";
import beer from "../img/beer.png";
import soju from "../img/soju.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;
const CheckBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin: 15px 0px;
`;

const BeverageImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const NameConatiner = styled.div`
  display: flex;
  justify-content: center;
  width: 57%;
`;

const BeverageName = styled.div`
  size: 13px;
  color: #444444;
  font-weight: 600;
  /* margin: 0px 148px 0px 153px; */
  min-width: 180px;
  margin: 14px auto;
  text-align: center;
`;

const Alcol = () => {
  return (
    <Container>
      <CheckBox>
        <BeverageImg src={beer} />
        <BeverageImg src={soju} />
      </CheckBox>
      <NameConatiner>
        <BeverageName>맥주</BeverageName>
        <BeverageName>소주</BeverageName>
      </NameConatiner>
      <Slider></Slider>
    </Container>
  );
};
export default Alcol;
