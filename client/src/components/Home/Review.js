import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Reviews = [
  "커뮤니티에서 인생레시피 발견했어요",
  "맥주 치즈케이크 김치 조합이 어울릴지몰랐어요",
  "맛집추천도 해주셔서 넘 좋아요 :) ",
  "게시판잼나요",
];
const ImageSlide = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
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
  transform: translate3d(${(props) => props.cr * -250}px, 0px, 0px);
  @media screen and (min-width: 768px) {
    transform: translate3d(${(props) => props.cr * -400}px, 0px, 0px);
  }
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 250px;
  height: 200px;

  text-align: center;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
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
  const isPc = useMediaQuery({ query: "(min-width: 768px)" }, undefined);
  const onChangeContent = (pageDelta) => {
    const lastReviewPageNum = Reviews.length - 1;
    const newCurrentPageNum = currentReview + pageDelta;

    if (newCurrentPageNum < 0) {
      setCurrentReview(lastReviewPageNum);
    } else if (newCurrentPageNum > lastReviewPageNum) {
      setCurrentReview(0);
    } else {
      setCurrentReview(newCurrentPageNum);
    }
  };

  return (
    <ImageSlide isPc={isPc}>
      <SlideBox isPc={isPc}>
        <SlideList cr={currentReview} isPc={isPc}>
          {Reviews.map((review, idx) => {
            return (
              <SlideContent key={idx} isPc={isPc}>
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
        }}>
        <i className='fas fa-chevron-left'></i>
      </ButtonPrev>
      <ButtonNext
        onClick={() => {
          onChangeContent(+1);
        }}>
        <i className='fas fa-chevron-right'></i>
      </ButtonNext>
    </ImageSlide>
  );
};

export default Review;
