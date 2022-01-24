import React from "react";
import styled from "styled-components";
import { alcols } from "../../dummy";

const ImageSlide = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`;
const SlideBox = styled.div`
  position: relative;
  width: 800px;
  margin: 100px auto;
  overflow-x: hidden;
  /* border: 1px solid red; */
  /* height: 300px; */
`;

const SlideList = styled.div`
  width: 2900px;
  transition: all 300ms ease 0s;
  overflow: hidden;
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 200px;
  height: 200px;
  /* border: 1px solid blue; */
`;

const Picture = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
`;

const Slider = () => {
  return (
    <ImageSlide>
      <SlideBox>
        <SlideList>
          {alcols.map((alcol, idx) => {
            return (
              <SlideContent key={idx}>
                <Picture>
                  <Img src={alcol.img} />
                </Picture>
              </SlideContent>
            );
          })}
        </SlideList>
      </SlideBox>
      <SlideBox>
        <SlideList>
          {alcols.map((alcol, idx) => {
            return (
              <SlideContent key={idx}>
                <Picture>
                  <Img src={alcol.img} />
                </Picture>
              </SlideContent>
            );
          })}
        </SlideList>
      </SlideBox>
    </ImageSlide>
  );
};

export default Slider;
