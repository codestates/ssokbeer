import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAlcohol, getSingleAlcohol } from "../../api";
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
const ImgContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-template-areas:
    "alcohol food"
    "alcohol food2";
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .alcohol {
    grid-area: alcohol;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 70%;
    }
  }
  .food {
    grid-area: food;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    div {
      margin: 10px;
    }
  }
  .food2 {
    grid-area: food2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    div {
      margin: 10px;
    }
  }
`;

const ImgBox = styled.div`
  border: 1px solid black;
`;

const Img = styled.img``;

const Name = styled.h1``;

const Modal = ({ openModal, id }) => {
  const [data, setData] = useState({});

  const getAlcolById = async () => {
    const alcocholInfo = await getSingleAlcohol(id);
    setData(alcocholInfo);
  };

  useEffect(() => {
    getAlcolById();
  }, []);
  // console.log(data);
  return (
    <ModalContainer>
      <AnimatePresence>
        <Container initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <i onClick={openModal} className="fas fa-times close"></i>
          <ImgContainer>
            <div className="alcohol">
              <img src={data.img} />
            </div>
            <div className="food">
              {data.dishes ? <img src={data.dishes[0].img} /> : null}
              {data.dishes ? <div className="title">{data.dishes[0].name}</div> : null}
              {data.dishes ? <div>{data.dishes[0].content}</div> : null}
            </div>

            <div className="food2">
              {data.dishes ? <img src={data.dishes[1].img} /> : null}
              {data.dishes ? <div className="title">{data.dishes[1].name}</div> : null}
              {data.dishes ? <div>{data.dishes[1].content}</div> : null}
            </div>
          </ImgContainer>
        </Container>
      </AnimatePresence>
      <Back onClick={openModal}></Back>
    </ModalContainer>
  );
};

export default Modal;
