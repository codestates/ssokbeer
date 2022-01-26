import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import SingleComment from "../components/Detailpage/SingleComment";
import NewCommentForm from "../components/Detailpage/NewCommentForm";
import { useSelector } from "react-redux";

import { deleteContent, formatDate, getSingleContent, IMG_BASE, patchContent, postLike, URL, visitPlus } from "../api";

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
`;

const Inform = styled.div`
  color: grey;
  margin-left: 6px;
`;

const ContentBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 400px;
  margin: 0px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Content = styled.div`
  margin: 20px 0px;
  width: 100%;
`;

const ContentImg = styled.img`
  width: 50%;
  height: 90%;
  text-align: center;
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
  const navigate = useNavigate();
  const state = useSelector((state) => state.allReducer);

  const [singleData, setSingleData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [changeContent, setChangeContent] = useState("");
  const [like, setLike] = useState(0);

  const getSingleData = async () => {
    const data = await getSingleContent(id);
    setSingleData(data);
  };

  const handleClickModify = async () => {
    const change = !isEditing;

    if (!change) {
      await patchContent(id, { title, img, content: changeContent });
    }

    setChangeContent(content);
    setIsEditing(change);
  };

  const handleCangeContent = (e) => {
    setChangeContent(e.target.value);
  };

  const handleClickDelete = async () => {
    await deleteContent(id);
    navigate("/community");
  };

  const { title, img, createdAt, visit, content, comments, userId, nickname } = singleData;

  const date = formatDate(createdAt);

  const handleLikeClick = async () => {
    const {
      data: { likeCount },
    } = await postLike(id);
    setLike(likeCount);
  };

  const check = parseInt(userId) === parseInt(state.userId);

  useEffect(() => {
    getSingleData();
    visitPlus(id);
  }, []);

  return (
    <Container>
      <Form>
        <ButtonBox>
          <ListLink to='/community'>
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
          <User>{nickname}</User>
          <Inform>추천 {like}</Inform>
          <Inform>조회{visit}</Inform>
          <Inform>{date}</Inform>
        </InformBox>
        {isEditing ? (
          <InputContent type='text' value={changeContent} onChange={handleCangeContent} />
        ) : (
          <ContentBox>
            <ContentImg src={img ? `${URL}/${img}` : IMG_BASE}></ContentImg>
            <Content>{content}</Content>
          </ContentBox>
        )}
        <ButtonBox>
          <Button>댓글</Button>
          <LikeBox>
            <LikeCount>{like}</LikeCount>
            <Like primary={like}>
              <i className='far fa-thumbs-up' onClick={handleLikeClick}></i>
            </Like>
          </LikeBox>
        </ButtonBox>
        <NewCommentForm nowContentId={id} nowUserId={state.userId} getSingleData={getSingleData} />
        <CommentForm>
          {comments?.map((comment, idx) => (
            <SingleComment key={idx} comment={comment} getSingleData={getSingleData} id={id} />
          ))}
        </CommentForm>
      </Form>
    </Container>
  );
};
export default Detailpage;
