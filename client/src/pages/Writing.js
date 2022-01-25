import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postComment, postContent } from "../api";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 0px 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Title = styled.input`
  text-decoration: none;
  border: none;
  width: 95%;
  padding: 20px 0px 10px 0px;
  font-size: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 500px;
  margin: 0px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

const Img = styled.input`
  text-decoration: none;
  border: none;
  width: 95%;
  padding: 20px 0px 10px 0px;
  font-size: 20px;
  color: grey;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid black; */
`;

const CancelLink = styled(Link)`
  text-decoration: none;
  cursor: grab;
`;

const Button = styled.button`
  all: unset;
  color: black;
  padding: 12px 12px;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
  &:hover {
    background-color: #fed969;
  }
`;

const Imtest = styled.img``;

const Writing = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState("");

  const postData = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", imgFile);
    postContent(formData);
  };

  const onChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const onSubmitValid = async () => {
    try {
      postData();
      nav("/community");
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <Container>
      <Form>
        <Title
          required
          type="text"
          placeholder="제목을 입력하세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></Title>
        <Img accept="image/*" type="file" onChange={(e) => onChange(e)} />
        <Content
          required
          type="textarea"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></Content>

        <ButtonBox>
          <CancelLink to="/community">
            <Button>취소</Button>
          </CancelLink>
          <Button type="submit" onClick={onSubmitValid}>
            등록
          </Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

export default Writing;
