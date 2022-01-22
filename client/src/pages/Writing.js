import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
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

<<<<<<< HEAD
const Content = styled.input`
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
const Img = styled.input`
  text-decoration: none;
  border: none;
  width: 95%;
  padding: 20px 0px 10px 0px;
  font-size: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  &:focus {
    outline: none;
=======
const Wrapper = styled.div`
  width: 95%;
  .ck-editor__main {
    min-height: 400px;
    width: 100%;
    > div {
      min-height: 520px;
    }
>>>>>>> ec2ad2d06874fd4a3f67cedac766922eb094ab77
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

const Writing = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("s");

  const onSubmitValid = async () => {
    try {
      const { contentInfo } = await axios.post("http://localhost:4000/content", {
        title,
        content,
        img,
      });
      nav("/community");
    } catch (e) {
      console.log(e.response);
    }
  };

  // useEffect(() => {
  //   const user = getContent();
  // }, []);

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
        <Content
          required
          type="text"
          placeholder="내용을 입력하세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></Content>
        <newImage />

        <Img type="file" />

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
