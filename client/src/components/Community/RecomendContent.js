import React from "react";
import styled from "styled-components";
import { IMG_BASE, URL } from "../../api";

const RecommendPost = styled.div`
  /* height: 280px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: 80%;
`;

const PostTitle = styled.div`
  margin: 10px;
  text-align: center;
`;

const RecomendContent = ({ content }) => {
  const { title, img } = content;
  return (
    <RecommendPost>
      <PostImage src={img ? `${URL}/${img}` : IMG_BASE}></PostImage>
      <PostTitle>{title}</PostTitle>
    </RecommendPost>
  );
};
export default RecomendContent;
