import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: 370px;
  grid-gap: 24px;
  /* border: 1px solid red; */
`;

const Post = styled.div`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

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

const CommunityPost = () => {
  const [likeCnt, setLikeCnt] = useState(0);
  const [like, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      setLikeCnt(likeCnt + 1);
    } else {
      setLikeCnt(likeCnt - 1);
    }
  };
  console.log("따봉확인", like);
  return (
    <Container>
      <CommunityNav>
        <CommunityHeader>
          오늘은 뭐먹을래?
          <i class="fas fa-utensils"></i>
        </CommunityHeader>
        <WritingLink to="/writing">
          <Button>글쓰기</Button>
        </WritingLink>
      </CommunityNav>
      <PostSection>
        <PostConatiner>
          <Post>
            <FoodImg src="https://cphoto.asiae.co.kr/listimglink/6/2017102710512764418_1.jpg"></FoodImg>
            <ContentBox>
              <ContentHeader>집나간며느리도 돌아오는..</ContentHeader>
              <Username>머규</Username>
              <ViewLikeBox>
                <View> 251 view </View>
                <LikeCount> {likeCnt}</LikeCount>
                <Like primary={like}>
                  <i className="far fa-thumbs-up" onClick={handleLikeClick}></i>
                </Like>
              </ViewLikeBox>
              <CreatedDate>01/20 오후2시35분</CreatedDate>
            </ContentBox>
          </Post>
          <Post>2</Post>
          <Post>3</Post>
        </PostConatiner>
      </PostSection>
    </Container>
  );
};

export default CommunityPost;
