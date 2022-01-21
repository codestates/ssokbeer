import AlcolList from "../components/Alcol/AlcolList";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { beer, soju, wine } from "../dummy";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  margin: 0 auto;
`;
const Button = styled.button`
  all: unset;
  font-size: 20px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: 30px;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #3f3c3c;
  margin: 0 15px;
`;

const listVariants = {
  entry: (back) =>
    back
      ? {
          x: -500,
          opacity: 0,
          scale: 0,
        }
      : {
          x: 500,
          opacity: 0,
          scale: 0,
        },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) =>
    back
      ? { x: 500, opacity: 0, scale: 0, transition: { duration: 0.5 } }
      : { x: -500, opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

const list = [soju, beer, wine];

const Alcol = () => {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  const next = () => {
    setBack(false);
    setVisible((prev) => (prev < list.length - 1 ? prev + 1 : 0));
  };
  const previ = () => {
    setBack(true);
    setVisible((prev) => (prev > 0 ? prev - 1 : list.length - 1));
  };

  return (
    <Container>
      <Header>
        <Button onClick={previ}>
          <i className="fas fa-arrow-left"></i>
        </Button>
        <Title>쏙비어 추천주류</Title>
        <Button onClick={next}>
          <i className="fas fa-arrow-right"></i>
        </Button>
      </Header>
      <AnimatePresence custom={back}>
        <AlcolList
          listVariants={listVariants}
          back={back}
          next={next}
          previ={previ}
          data={list[visible]}
          key={visible}
        />
      </AnimatePresence>
    </Container>
  );
};
export default Alcol;
