import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import axios from "axios";

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

const Wrapper = styled.div`
  width: 95%;
  .ck-editor__main {
    min-height: 400px;
    width: 100%;
    > div {
      min-height: 520px;
    }
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
  const [post, setPost] = useState({
    title: "",
    image: "",
    content: "",
  });

  const onTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
    console.log(post);
  };

  const handleClickSubmit = async () => {
    // const submit = await axios.post(`http://localhost:4000/content`, {
    //   title: post.title,
    //   image: post.image,
    //   content: post.content,
    // });
    console.log(post.title);
  };

  return (
    <Container>
      <Form>
        <Title required type="text" placeholder="제목을 입력하세요" onChange={onTitleChange}></Title>
        <Wrapper>
          <CKEditor
            editor={ClassicEditor}
            data="<p>내용을 입력하세요</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              //   console.log({ event, editor, data });
              setPost({ ...post, content: data });
            }}
            onBlur={(event, editor) => {
              //   console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              //   console.log("Focus.", editor);
            }}
          />
        </Wrapper>
        <ButtonBox>
          <CancelLink to="/community">
            <Button>취소</Button>
          </CancelLink>
          <Button type="submit" onClick={handleClickSubmit}>
            등록
          </Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

export default Writing;
