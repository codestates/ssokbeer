import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSingleAlcohol } from "../../api";

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
  padding: 20px 0;
`;
const Container = styled(motion.div)`
  position: relative;
  z-index: 10002;
  background-color: white;
  max-width: 768px;
  max-height: 768px;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  i {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 28px;
    cursor: pointer;
  }
`;

const AlcholCotainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const AlcolName = styled.div`
  font-size: 20px;
  color: #444444;
`;

const Linebox = styled.div`
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
`;

const FoodLineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 42%;
`;

const Img = styled.img`
  width: 70%;
  height: 55%;
`;

const FoodImg = styled.img`
  width: 65%;
  height: 65%;
`;

const FoodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const FoodLine = styled.div`
  width: 80%;
  margin: 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const FoodName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;

const FoodContent = styled.div`
  font-size: 14px;
  color: #444444;
`;

const Modal = ({ openModal, id }) => {
  const [data, setData] = useState({});

  const getAlcolById = async () => {
    const alcocholInfo = await getSingleAlcohol(id);
    setData(alcocholInfo);
  };

  useEffect(() => {
    getAlcolById();
  }, []);

  return (
    <ModalContainer>
      <AnimatePresence>
        <Container initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <i onClick={openModal} className='fas fa-times close'></i>
          <ImgContainer>
            <AlcholCotainer>
              <Img src={data.img}></Img>
              <Linebox></Linebox>
              <AlcolName>{data.name}</AlcolName>
            </AlcholCotainer>
            <FoodContainer>
              <FoodBox>
                <FoodLineBox>
                  {data.dishes ? <FoodImg src={data.dishes[0].img} /> : null}
                  <FoodLine />
                  {data.dishes ? <FoodName>{data.dishes[0].name}</FoodName> : null}
                  {data.dishes ? <FoodContent>{data.dishes[0].content}</FoodContent> : null}
                </FoodLineBox>
                <FoodLineBox>
                  {data.dishes ? <FoodImg src={data.dishes[1].img} /> : null}
                  <FoodLine />
                  {data.dishes ? <FoodName>{data.dishes[1].name}</FoodName> : null}
                  {data.dishes ? <FoodContent>{data.dishes[1].content}</FoodContent> : null}
                </FoodLineBox>
              </FoodBox>
            </FoodContainer>
          </ImgContainer>
        </Container>
      </AnimatePresence>
      <Back onClick={openModal}></Back>
    </ModalContainer>
  );
};

export default Modal;
