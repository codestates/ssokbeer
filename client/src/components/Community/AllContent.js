import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate, IMG_BASE, URL } from "../../api";

const Post = styled(Link)`
  background-color: #f2f2f2;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: 0.5s;
`;
const FoodLink = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodImg = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
`;

const Username = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ViewLikeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const View = styled.div`
  font-size: 16px;
`;

const Like = styled.div`
  font-size: 16px;
  color: ${(props) => (props.primary ? "red" : "black")};
  text-align: center;
  i {
    font-size: 16px;
    color: ${(props) => (props.primary ? "red" : "black")};
  }
  margin: 4px 0 7px 0;
`;
const CreatedDate = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const AllContent = ({ content }) => {
  const { id, nickname, title, visit, like, createdAt, img } = content;
  const date = formatDate(createdAt);

  return (
    <Post to={`${id}`}>
      <FoodLink>
        <FoodImg src={img ? `${URL}/${img}` : IMG_BASE}></FoodImg>
      </FoodLink>
      <ContentBox>
        <ContentHeader>{title.length < 6 ? title : `${title.slice(0, 6)}...`}</ContentHeader>
        <Username>{nickname}</Username>
        <ViewLikeBox>
          <View>조회{visit}</View>
          <Like primary={like}>
            <i className='far fa-thumbs-up'>{like}</i>
          </Like>
        </ViewLikeBox>
        <CreatedDate>{date}</CreatedDate>
      </ContentBox>
    </Post>
  );
};
export default AllContent;
