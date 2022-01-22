import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { alcols } from "../../dummy";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;
const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled(motion.div)`
  position: relative;
  z-index: 10002;
  background-color: white;
  max-width: 768px;
  max-height: 768px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, 1fr);
  gap: 24px;
  border-radius: 10px;
  i {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 28px;
    cursor: pointer;
  }
`;
const Column = styled.div`
  grid-column: span 2;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 70%;
`;

const Modal = ({ openModal, alcolId }) => {
  const [data, setData] = useState({});

  const getAlcolById = () => {
    const data = alcols.filter((alcol) => alcol.id === parseInt(alcolId))[0];
    setData(data);
  };

  useEffect(() => {
    getAlcolById();
  }, []);

  return (
    <ModalContainer>
      <AnimatePresence>
        <Container initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <i onClick={openModal} className="fas fa-times close"></i>
          <Column className="img">
            <Img src={data.img} />
          </Column>
          <Column>
            <Title>{data.name}</Title>
          </Column>
        </Container>
      </AnimatePresence>

      <Back onClick={openModal}></Back>
    </ModalContainer>
  );
};

export default Modal;
