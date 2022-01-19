import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 0px 15px;
  /* border: 1px solid blue; */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  width: 100%;
  border: 1 solid purple;
`;
const File = styled.input`
  width: 80%;
  border: 1 solid black;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
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
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #bcbcbc;
  font-size: 15px;
  &:hover {
    background-color: #fed969;
  }
`;

const Writing = () => {
  return (
    <Container>
      <Form>
        <Title required type="text" placeholder="제목을 입력하세요"></Title>
        <File type="file" onChange={handleChangeClick}></File>
        <Content required cols="36" rows="47"></Content>
        <ButtonBox>
          <CancelLink to="/community">
            <Button>취소</Button>
          </CancelLink>
          <Button type="submit">등록</Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

export default Writing;
