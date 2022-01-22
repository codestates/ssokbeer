import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Singlepost from "./Singlepost.js";

axios.defaults.withCredentials = true;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255);
`;

const CommunityNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  /* border: 1px solid blue; */
`;
const CommunityHeader = styled.header`
  font-size: 17px;
  font-weight: 400;
  i {
    padding: 0 5px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  all: unset;
  padding: 10px 10px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
  &:hover {
    background-color: #fed969;
  }
`;

const WritingLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostSection = styled.section`
  width: 100%;
  padding: 0px 15px;
  background-color: rgba(255, 255, 255);
  /* border: 1px solid blue; */
`;

const PostConatiner = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: 370px;
  grid-gap: 24px;
  /* border: 1px solid red; */
`;

const Dummy = [
  {
    id: 1,
    title: "집나간며느리도 돌아오는...",
    img: "https://cphoto.asiae.co.kr/listimglink/6/2017102710512764418_1.jpg",
    content: "전어가 아주그냥 끝내주네요",
    visits: 0,
    like: 3,
    commentsId: null,
    usersId: 1,
    createdAt: "2022-01-18T10:29:02.000Z",
    updatedAt: "2022-01-18T10:29:02.000Z",
  },
  {
    id: 2,
    title: "환상특급 삼겹살파티",
    img: "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    content: "환상특급 삼겹살파티",
    visits: 1,
    like: 5,
    commentsId: null,
    usersId: 2,
    createdAt: "2022-01-18T10:51:52.000Z",
    updatedAt: "2022-01-18T14:10:37.000Z",
  },
];

const CommunityPost = () => {
  const [posts, setPosts] = useState(Dummy);

  // useEffect(() => {
  //   const { allContent } = axios.get(`http://localhost4000/content`);
  //   setPosts(allContent)
  // });

  return (
    <Container>
      <CommunityNav>
        <CommunityHeader>
          오늘은 뭐먹을래?
          <i className="fas fa-utensils"></i>
        </CommunityHeader>
        <WritingLink to="/writing">
          <Button>글쓰기</Button>
        </WritingLink>
      </CommunityNav>
      <PostSection>
        <PostConatiner>
          {posts.map((post) => (
            <Singlepost post={post}></Singlepost>
          ))}
        </PostConatiner>
      </PostSection>
    </Container>
  );
};

export default CommunityPost;
