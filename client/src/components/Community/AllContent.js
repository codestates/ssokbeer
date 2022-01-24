import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Post = styled.div`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const FoodLink = styled(Link)``;

const FoodImg = styled.img`
  width: 50%;
  height: 70%;
  border-radius: 50%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
`;

const Username = styled.div`
  font-size: 16px;
  padding: 10px;
`;

const ViewLikeBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 65%;
`;

const View = styled.div`
  font-size: 16px;
  padding: 10px;
`;
const LikeCount = styled.div`
  font-size: 16px;
  padding: 10px;
`;

const Like = styled.div`
  font-size: 16px;
  color: ${(props) => (props.primary ? "red" : "black")};
  i {
    padding-top: 5px;
    padding-left: 10px;
    margin-top: 2px;
    font-size: 16px;
    color: ${(props) => (props.primary ? "red" : "black")};
  }
`;
const CreatedDate = styled.div`
  font-size: 16px;
  padding: 10px;
`;

const AllContent = ({ content }) => {
  const { id, nickname, title, visit, likeCnt, like, createdAt, img } = content;

  return (
    <Post>
      <FoodLink to={`${id}`}>
        <FoodImg src={img}></FoodImg>
      </FoodLink>
      <ContentBox>
        <ContentHeader to={`${id}`}>{title}</ContentHeader>
        <Username>{nickname}</Username>
        <ViewLikeBox>
          <View>{visit}</View>
          <LikeCount> {likeCnt}</LikeCount>
          <Like primary={like}>
            <i className="far fa-thumbs-up">{like}</i>
          </Like>
        </ViewLikeBox>
        <CreatedDate>{createdAt}</CreatedDate>
      </ContentBox>
    </Post>
  );
};
export default AllContent;
