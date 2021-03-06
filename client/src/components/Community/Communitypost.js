import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AllContent from "./AllContent";
import { useSelector } from "react-redux";

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
  background-color: rgba(255, 255, 255);
`;

const PostConatiner = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 24px;
`;

const CommunityPost = ({ allContent }) => {
  const state = useSelector((state) => state.allReducer);

  return (
    <Container>
      <CommunityNav>
        <CommunityHeader>
          오늘은 뭐먹을래?
          <i className='fas fa-utensils'></i>
        </CommunityHeader>
        {state.isLogin && (
          <WritingLink to='/writing'>
            <Button>글쓰기</Button>
          </WritingLink>
        )}
      </CommunityNav>
      <PostSection>
        <PostConatiner>
          {allContent.map((content, idx) => {
            return <AllContent key={idx} content={content} />;
          })}
        </PostConatiner>
      </PostSection>
    </Container>
  );
};

export default CommunityPost;
