import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../../api";

const Post = styled.div`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
`;
const FoodLink = styled(Link)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
`;

const FoodImg = styled.img`
  width: 70%;
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
  text-decoration: none;
  color: black;
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
  min-width: 70px;
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

  // console.log(likeCnt);

  const date = formatDate(createdAt);

  return (
    <Post>
      <FoodLink to={`${id}`}>
        <FoodImg
          src={
            img
              ? `https://api.bom-ko.com/${img}`
              : "https://github.com/StrummingDown/ssokbeerImg/blob/main/ssokbeerlogo.png?raw=true"
          }
        ></FoodImg>
      </FoodLink>
      <ContentBox>
        <ContentHeader to={`${id}`}>{title}</ContentHeader>
        <Username>{nickname}</Username>
        <ViewLikeBox>
          <View>조회{visit}</View>
          <LikeCount> {likeCnt}</LikeCount>
          <Like primary={like}>
            <i className="far fa-thumbs-up">{like}</i>
          </Like>
        </ViewLikeBox>
        <CreatedDate>{date}</CreatedDate>
      </ContentBox>
    </Post>
  );
};
export default AllContent;
