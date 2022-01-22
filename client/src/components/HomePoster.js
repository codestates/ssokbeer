import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SetBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImgBox = styled.img`
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
`;

const TextBox = styled.span`
  width: 100%;
  margin: 0 auto;
  padding: 130px 115px;
  position: absolute;
  font-size: 20px;
  color: white;
`;

const HomePost = () => {
  return (
    <Container>
      <SetBox>
        <ImgBox src="https://github.com/KongJin/ssockbeerHomePoster/blob/main/%EC%8F%99%EB%B9%84%EC%96%B4%20%ED%99%88%ED%8F%AC%EC%8A%A4%ED%84%B0/elevate-snnhGYNqm44-unsplash.jpg?raw=true" />
        <TextBox>혼술, 진정한 나를 찾는 시간</TextBox>
      </SetBox>
    </Container>
  );
};

export default HomePost;

// const CommunityNav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 20px 0px;
//   /* border: 1px solid blue; */
// `;
// const CommunityHeader = styled.header`
//   font-size: 17px;
//   font-weight: 400;
//   i {
//     padding: 0 5px;
//     font-size: 20px;
//   }
// `;

// const Button = styled.button`
//   all: unset;
//   padding: 10px 10px;
//   border-radius: 3px;
//   cursor: pointer;
//   border: 1px solid #bcbcbc;
//   font-size: 15px;
//   &:hover {
//     background-color: #fed969;
//   }
// `;

// const WritingLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

// const PostSection = styled.section`
//   width: 100%;
//   padding: 0px 15px;
//   background-color: rgba(255, 255, 255);
//   /* border: 1px solid blue; */
// `;

// const PostConatiner = styled.div`
//   width: 100%;
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
//   grid-auto-rows: 370px;
//   grid-gap: 24px;
//   /* border: 1px solid red; */
// `;

// const Post = styled.div`
//   width: 100%;
//   border: 1px solid grey;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const FoodImg = styled.img`
//   width: 50%;
//   height: 70%;
//   border-radius: 50%;
// `;

// const ContentBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ContentHeader = styled.div`
//   font-size: 20px;
//   font-weight: 500;
//   padding: 20px;
// `;

// const Username = styled.div`
//   font-size: 16px;
//   padding: 10px;
// `;

// const ViewLikeBox = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
//   width: 65%;
// `;

// const View = styled.div`
//   font-size: 16px;
//   padding: 10px;
// `;
// const LikeCount = styled.div`
//   font-size: 16px;
//   padding: 10px;
// `;

// const Like = styled.div`
//   font-size: 16px;
//   color: ${(props) => (props.primary ? "red" : "black")};
//   i {
//     padding-top: 5px;
//     padding-left: 10px;
//     margin-top: 2px;
//     font-size: 16px;
//     color: ${(props) => (props.primary ? "red" : "black")};
//   }
// `;

// const CreatedDate = styled.div`
//   font-size: 16px;
//   padding: 10px;
// `;
