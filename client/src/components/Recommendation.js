import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 100px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255);
  border: 1px solid blue;
  height: 330px;
`;
const RecommendText = styled.h3`
  margin: 25px 0px;
  padding: 10px;
  border: 1px solid red;
`;

const RecommendConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 10px;
`;
const RecommendPost = styled.div`
  background-color: wheat;
  height: 200px;
`;

const Recommendation = () => {
  return (
    <Section>
      <RecommendText>이달의 추천 TOP</RecommendText>
      <RecommendConatiner>
        <RecommendPost>1</RecommendPost>
        <RecommendPost>2</RecommendPost>
        <RecommendPost>3</RecommendPost>
        <RecommendPost>4</RecommendPost>
      </RecommendConatiner>
    </Section>
  );
};

export default Recommendation;
