import React, { useState } from "react";
import styled from "styled-components";

const Contaier = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid blue; */
  /* margin: 30px 0px; */
  text-align: center;
`;

const SelectBox = styled.select`
  width: 5.5rem;
  padding: 0.8em 0.5em;
  border: 1px solid black;
  color: black;
  font-weight: bold;
`;

const Input = styled.input`
  width: 60%;
`;

const Button = styled.button``;

const SearchBar = () => {
  const [choice, setChoice] = useState("");
  const [textSearch, setTextSearch] = useState("");

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  };

  const handleSearchClick = () => {};

  const handleKeyPress = (e) => {
    if ((e.type = "Enter")) {
      handleSearchClick();
    }
  };

  const lists = ["제목", "글쓴이", "내용", "작성한글"];
  const options = lists.map((list, i) => {
    return (
      <option key={i} value={list}>
        {list}
      </option>
    );
  });

  const handleList = (event) => {
    setChoice(event.target.value);
  };

  // {conents.filter(content => content.title === filterText)}

  return (
    <Contaier>
      <SelectBox onChange={handleList}>{options}</SelectBox>
      <Input
        type="text"
        placeholder="현재 게시판 내용 검색"
        value={textSearch}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></Input>
      <Button onClick={handleSearchClick}>검색</Button>
    </Contaier>
  );
};
export default SearchBar;
