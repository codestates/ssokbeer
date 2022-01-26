import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IMG_BASE, URL } from "../../api";

const RecommendPost = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
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
    <RecommendPost to={`${content.id}`}>
      <PostImage src={img ? `${URL}/${img}` : IMG_BASE}></PostImage>
      <PostTitle>{title.length < 7 ? title : `${title.slice(0, 7)}...`}</PostTitle>
    </RecommendPost>
  );
};
export default RecomendContent;
