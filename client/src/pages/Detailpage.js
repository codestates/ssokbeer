import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SingleComment from "../components/Detailpage/SingleComment";
import NewCommentForm from "../components/Detailpage/NewCommentForm";


const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 0px 15px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 860px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  width: 95%;
`;

const ListLink = styled(Link)`
  text-decoration: none;
  cursor: grab;
`;

const Button = styled.button`
  all: unset;
  color: black;
  padding: 8px 8px;
  /* margin: 30px; */
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
`;

const ModifyButton = styled.button`
  all: unset;
  color: black;
  padding: 8px 8px;
  margin-left: 10px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
`;

const ButtonAllignment = styled.div``;

const Title = styled.div`
  text-decoration: none;
  border: none;
  width: 95%;
  padding: 20px 0px 10px 0px;
  font-size: 25px;
  /* border: 1px solid black; */
  &:focus {
    outline: none;
  }
`;

const InformBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 5%;
  margin-bottom: 10px;
`;

const User = styled.div`
  margin: 0px 8px 0px 5px;
  /* border: 1px solid red; */
`;

const Inform = styled.div`
  color: grey;
  /* border: 1px solid pink; */
  margin-left: 6px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 45%;
  margin: 0px 18px;
  border: 1px solid black;
`;

const LikeBox = styled.div`
  display: flex;
  justify-content: space between;
  align-items: center;
  color: black;
  padding: 8px 8px;
  border-radius: 3px;
  border: 1px solid #bcbcbc;
  font-size: 15px;
`;

const LikeCount = styled.div`
  padding-top: 5px;
  font-size: 16px;
`;

const Like = styled.div`
  font-size: 16px;
  padding-left: 10px;
  color: ${(props) => (props.primary ? "red" : "black")};
  i {
    font-size: 16px;
    color: ${(props) => (props.primary ? "red" : "black")};
  }
`;
const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 45%;
  margin: 0px 18px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const DUMMY_DATA = [
  {
    id: 1,
    usersId: 4,
    nickname: "머규",
    content: "개맛있겠당ㅋㅋㅋ",
    contentsId: 2,
    createdAt: "2022-01-18T13:24:19.000Z",
    updatedAt: "2022-01-18T13:24:19.000Z",
  },
  {
    id: 2,
    usersId: 4,
    nickname: "이채야채",
    content: "oowooowoowoooo",
    contentsId: 2,
    createdAt: "2022-01-18T13:25:28.000Z",
    updatedAt: "2022-01-18T13:25:28.000Z",
  },
  {
    id: 3,
    usersId: 4,
    nickname: "진0",
    content: "oowooowoowoooo",
    contentsId: 2,
    createdAt: "2022-01-18T13:25:28.000Z",
    updatedAt: "2022-01-18T13:25:28.000Z",
  },
  {
    id: 4,
    usersId: 4,
    nickname: "몬스타",
    content: "oowooowoowoooo",
    contentsId: 2,
    createdAt: "2022-01-18T13:25:28.000Z",
    updatedAt: "2022-01-18T13:25:28.000Z",
  },
];

const Detailpage = () => {
  //   const [isAdministrator, setIsadministrator] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState(DUMMY_DATA);

  useEffect(() => {
    //comments = axios.get(server/contents/14) DO
    // setComments(comments);
    // comment newPost ? refresh
    // 등록을 한다 -> 서버 -> comemnts 10000000 -> (프로젝트용)
  });

  const handleLikeClick = () => {
    setLike(!like);
    if (!like) {
      setLikeCnt(likeCnt + 1);
    } else {
      setLikeCnt(likeCnt - 1);
    }
  };
  const handleClickModify = () => {};
  const handleClickDelete = () => {};

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <Container>
      <Form>
        <ButtonBox>
          <ListLink to="/community">
            <Button>목록</Button>
          </ListLink>
          <ButtonAllignment>
            <ModifyButton onClick={handleClickModify}>수정</ModifyButton>
            <ModifyButton onClick={handleClickDelete}>삭제</ModifyButton>
          </ButtonAllignment>
        </ButtonBox>
        <Title>집나간 며느리도 돌아오는...</Title>
        <InformBox>
          <User>머규</User>
          <Inform>추천 {likeCnt}</Inform>
          <Inform>조회</Inform>
          <Inform>22.01.20 14:17</Inform>
          <Inform>댓글</Inform>
        </InformBox>
        <Content></Content>
        <ButtonBox>
          <Button>댓글</Button>
          <LikeBox>
            <LikeCount> {likeCnt}</LikeCount>
            <Like primary={like}>
              <i className="far fa-thumbs-up" onClick={handleLikeClick}></i>
            </Like>
          </LikeBox>
        </ButtonBox>
        <CommentForm>
          {comments.map((comment) => (
            <SingleComment comment={comment} />
          ))}
          <NewCommentForm onButttonClick={addNewComment} />
        </CommentForm>
      </Form>
    </Container>
  );
};
export default Detailpage;
