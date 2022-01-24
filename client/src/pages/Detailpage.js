import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import SingleComment from "../components/Detailpage/SingleComment";
import NewCommentForm from "../components/Detailpage/NewCommentForm";
import axios from "axios";
import { dateToStr, deleteContent, formatDate, getSingleContent, patchContent, postLike } from "../api";

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
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
  height: 100%;
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
  height: 400px;
  margin: 0px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
const InputContent = styled.textarea`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 400px;
  margin: 0px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
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

const Detailpage = () => {
  let { id } = useParams();

  // console.log(state);
  //   const [isAdministrator, setIsadministrator] = useState(false);

  const [singleData, setSingleData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [changeContent, setChangeContent] = useState("");

  const getSingleData = async () => {
    const data = await getSingleContent(id);

    setSingleData(data);
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const handleClickModify = async () => {
    const change = !isEditing;
    if (!change) {
      await patchContent(id, { title, img, content: changeContent });
      window.location.reload();
    }
    setChangeContent(content);
    setIsEditing(change);
  };

  const handleCangeContent = (e) => {
    setChangeContent(e.target.value);
  };

  const handleClickDelete = async () => {
    await deleteContent(id);
    window.location.reload("/comunity");
  };

  const { title, img, createdAt, visit, like, content, comments, userId } = singleData;

  const date = formatDate(createdAt);

  const handleLikeClick = () => {
    postLike(id);
    window.location.reload();
  };

  const nowUserId = localStorage.getItem("userInfo");

  const check = parseInt(userId) === parseInt(nowUserId);

  return (
    <Container>
      <Form>
        <ButtonBox>
          <ListLink to="/community">
            <Button>목록</Button>
          </ListLink>
          {check && (
            <ButtonAllignment>
              <ModifyButton onClick={handleClickModify}>{isEditing ? "완료" : "수정"}</ModifyButton>
              <ModifyButton onClick={handleClickDelete}>삭제</ModifyButton>
            </ButtonAllignment>
          )}
        </ButtonBox>
        <Title>{title}</Title>
        <InformBox>
          <User>머규</User>
          <Inform>추천 {like}</Inform>
          <Inform>조회{visit}</Inform>
          <Inform>{date}</Inform>
        </InformBox>
        {isEditing ? (
          <InputContent type="text" value={changeContent} onChange={handleCangeContent} />
        ) : (
          <Content>{content}</Content>
        )}
        <ButtonBox>
          <Button>댓글</Button>
          <LikeBox>
            <LikeCount>{like}</LikeCount>
            <Like primary={like}>
              <i className="far fa-thumbs-up" onClick={handleLikeClick}></i>
            </Like>
          </LikeBox>
        </ButtonBox>
        <NewCommentForm nowContentId={id} nowUserId={nowUserId} />
        <CommentForm>
          {comments?.map((comment, idx) => (
            <SingleComment key={idx} comment={comment} />
          ))}
        </CommentForm>
      </Form>
    </Container>
  );
};
export default Detailpage;
