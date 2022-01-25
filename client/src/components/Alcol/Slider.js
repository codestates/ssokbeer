import React, { useState } from "react";
import styled from "styled-components";
import { alcols } from "../../dummy";

const ImageSlide = styled.div`
  justify-content: center;
  position: relative;
  width: 100%;
  margin: auto;
`;

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
const SlideBox = styled.div`
  position: relative;
  width: 1080px;
  margin: 100px auto;
  overflow-x: hidden;
  border: 1px solid red;
  /* height: 300px; */
`;

const SlideList = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 2900px;
  transition: all 300ms ease 0s;
  overflow: hidden;
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 200px;
  /* height: 200px; */
  margin: 0px 10px;
  border: 1px solid blue;
`;

const Picture = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: 1px solid red;
  margin: 10px 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10%;
  /* padding: 0px 10px; */
  /* border: 2px solid red; */
`;

const ButtonPrev = styled.div`
  left: -3px;
  position: absolute;
  top: 80px;
  width: 100px;
  height: 100px;
  padding: 15px;
  vertical-align: middle;
  background-color: red;
`;
const ButtonNext = styled.div`
  right: -10px;
  position: absolute;
  top: 80px;
  width: 100px;
  height: 100px;
  padding: 15px;
  vertical-align: middle;
  background-color: red;
`;

const Slider = () => {
  //   const [currentReview, setCurrentReview] = useState(0);
  //   const onChangeContent = (pageDelta) => {
  //     const lastReviewPageNum = Reviews.length - 1;
  //     const newCurrentPageNum = currentReview + pageDelta;

  //     if (newCurrentPageNum < 0) {
  //       setCurrentReview(lastReviewPageNum);
  //     } else if (newCurrentPageNum > lastReviewPageNum) {
  //       setCurrentReview(0);
  //     } else {
  //       setCurrentReview(newCurrentPageNum);
  //     }
  //   };

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
      <ButtonPrev>
        <i className="fas fa-chevron-left"></i>
      </ButtonPrev>
      <ButtonNext>
        <i className="fas fa-chevron-right"></i>
      </ButtonNext>
    </ImageSlide>
  );
};

export default Slider;
