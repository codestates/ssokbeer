import React, { useState } from "react";
import styled from "styled-components";
import { deleteComment, editComment } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setChange } from "../../action";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 20px;
`;

const CommentAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    color: grey;
    font-size: 15px;
  }
`;
const UserBox = styled.div`
  display: flex;
`;
const User = styled.div`
  margin: 0px 8px 0px 5px;
`;
const Inform = styled.div`
  color: grey;
  /* border: 1px solid pink; */
  margin-left: 6px;
`;

const Comment = styled.div`
  /* border: 1px solid black; */
  font-size: 18px;
`;
const EditComment = styled.input`
  /* border: 1px solid black; */
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const ModifyBox = styled.div`
  /* width: 100%; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-self: center;
  margin: 0px;
  i {
    text-align: right;
  }
  /* border: 1px solid blue; */
`;
const ModifyPopup = styled.button`
  width: 100px;
  padding: 5px 5px 5px 3px;
  margin: 3px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: white;
  border-radius: 3px;
  font-size: 14px;
  cursor: grab;
`;

const SingleComment = ({ comment }) => {
  const state = useSelector((state) => state.allReducer);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [changeContent, setChangeContent] = useState("");
  const { nickname, createdAt, content, userId, id } = comment;

  const handleEdit = async () => {
    const change = !isEditing;
    if (!change) {
      await editComment(id, changeContent);
      dispatch(setChange());
    }

    setChangeContent(content);
    setIsEditing(change);
  };

  const handlechangeContent = (e) => {
    setChangeContent(e.target.value);
  };

  const handleDelete = async () => {
    await deleteComment(id);
    dispatch(setChange());
  };

  const check = parseInt(userId) === parseInt(state.userId);

  return (
    <CommentBox>
      <CommentAlignment>
        <UserBox>
          <User>{nickname}</User>
          <Inform>{createdAt}</Inform>
        </UserBox>

        {check && (
          <ModifyBox>
            <ModifyPopup onClick={handleEdit}>{isEditing ? "완료" : "수정"}</ModifyPopup>
            <ModifyPopup onClick={handleDelete}>삭제</ModifyPopup>
          </ModifyBox>
        )}
      </CommentAlignment>

      {isEditing ? <EditComment value={changeContent} onChange={handlechangeContent} /> : <Comment>{content}</Comment>}
    </CommentBox>
  );
};

export default SingleComment;
