import React, { useState } from "react";
import styled, { css } from "styled-components";

const Reviews = [
  "커뮤니티에서 인생레시피 발견했어요",
  "맥주 치즈케이크 김치 조합이 어울릴지몰랐어요",
  "맛집추천도 해주셔서 넘 좋아요 :) ",
  "게시판잼나요",
];
const ImageSlide = styled.div`
  position: relative;
  border: 2px solid red;
  width: 300px;
  margin: auto;
`;

const SlideBox = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;

const SlideList = styled.div`
  width: 1200px;
  transition: all 30ms ease 0s;
  overflow: hidden;
  transform: translate3d(${(props) => props.cr * -300}px, 0px, 0px);
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 300px;
  height: 300px;

  text-align: center;
`;

const ReviewBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
`;

const ButtonPrev = styled.div`
  border: 1px solid pink;
  left: -50px;
  position: absolute;
  top: 130px;
  width: 50px;
  height: 50px;
  padding: 15px;
  vertical-align: middle;
`;
const ButtonNext = styled.div`
  border: 1px solid purple;
  right: -50px;
  position: absolute;
  top: 130px;
  width: 50px;
  height: 50px;
  padding: 15px;
  vertical-align: middle;
`;

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const onChangeContent = (n) => {
    const a = currentReview + n;

    if (a < 0) {
      setCurrentReview(3);
    } else if (a > 3) {
      setCurrentReview(0);
    } else {
      setCurrentReview(a);
    }
  };

  return (
    <ImageSlide>
      <SlideBox>
        <SlideList cr={currentReview}>
          {Reviews.map((review) => {
            return (
              <SlideContent>
                <ReviewBox>
                  <Content>{review}</Content>
                </ReviewBox>
              </SlideContent>
            );
          })}
        </SlideList>
      </SlideBox>
      <ButtonPrev
        onClick={() => {
          onChangeContent(-1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </ButtonPrev>
      <ButtonNext
        onClick={() => {
          onChangeContent(+1);
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </ButtonNext>
    </ImageSlide>
  );
};

export default Review;
