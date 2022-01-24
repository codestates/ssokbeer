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
  width: 400px;
  height: 100%;
  margin: auto;
`;

const SlideBox = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
  background-color: white;
`;

const SlideList = styled.div`
  width: 1700px;
  transition: all 30ms ease 0s;
  overflow: hidden;
  transform: translate3d(${(props) => props.cr * -400}px, 0px, 0px);
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 400px;
  height: 200px;

  text-align: center;
`;

const ReviewBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
`;

const ButtonPrev = styled.div`
  left: -50px;
  position: absolute;
  top: 80px;
  width: 50px;
  height: 50px;
  padding: 15px;
  vertical-align: middle;
`;
const ButtonNext = styled.div`
  right: -50px;
  position: absolute;
  top: 80px;
  width: 50px;
  height: 50px;
  padding: 15px;
  vertical-align: middle;
`;

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);
<<<<<<< HEAD
  const onChangeContent = (pageDelta) => {
    const lastReviewPageNum = Reviews.length - 1;
    const newCurrentPageNum = currentReview + pageDelta;

    if (newCurrentPageNum < 0) {
      setCurrentReview(lastReviewPageNum);
    } else if (newCurrentPageNum > lastReviewPageNum) {
      setCurrentReview(0);
    } else {
      setCurrentReview(newCurrentPageNum);
=======
  const onChangeContent = (n) => {
    const a = currentReview + n;

    if (a < 0) {
      setCurrentReview(3);
    } else if (a > 3) {
      setCurrentReview(0);
    } else {
      setCurrentReview(a);
>>>>>>> efdc4d90e151c38dc5c8a64fc7c7cf047816a1ca
    }
  };

  return (
    <ImageSlide>
      <SlideBox>
        <SlideList cr={currentReview}>
          {Reviews.map((review, idx) => {
            return (
              <SlideContent key={idx}>
                <ReviewBox key={idx}>
                  <Content key={idx}>{review}</Content>
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
