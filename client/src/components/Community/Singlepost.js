import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = styled.div`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FoodImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 0px 18px;
`;

const FoodLink = styled(Link)`
  color: black;
  width: 52%;
  height: 75%;
  margin: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.div`
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

const Singlepost = ({ post }) => {
  const [likeCnt, setLikeCnt] = useState(post.like);
  const [like, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      setLikeCnt(likeCnt + 1);
    } else {
      setLikeCnt(likeCnt - 1);
    }
  };

  return (
    <Post>
      <FoodLink to={"detailpage"} state={{ post }}>
        <FoodImg src={post.img}></FoodImg>
      </FoodLink>
      <ContentBox>
        <ContentHeader>{post.title}</ContentHeader>
        <Username>머규</Username>
        <ViewLikeBox>
          <View> {post.visits} view </View>
          <LikeCount> {likeCnt}</LikeCount>
          <Like primary={like}>
            <i className="far fa-thumbs-up" onClick={handleLikeClick}></i>
          </Like>
        </ViewLikeBox>
        <CreatedDate>{post.createdAt}</CreatedDate>
      </ContentBox>
    </Post>
  );
};
export default Singlepost;
