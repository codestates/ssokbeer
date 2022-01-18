import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Recommendation from "../components/Recommendation";

const SelectBox = styled.select`
  width: 8rem;
  padding: 0.8em 0.5em;
  border: 1px solid black;
  color: black;
  font-weight: bold;
`;

const Community = () => {
  const [choice, setChoice] = useState("");
  const lists = ["제목", "글쓴이", "내용", "작성한글"];
  const options = lists.map((list) => {
    return <option value={list}>{list}</option>;
  });
  const handleList = (event) => {
    setChoice(event.target.value);
  };
  return (
    <>
      <Recommendation />
      <SelectBox onChange={handleList}>{options}</SelectBox>
    </>
  );
};

export default Community;
