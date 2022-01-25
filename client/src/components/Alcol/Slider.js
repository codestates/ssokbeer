import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAlcohol } from "../../api";
import { useMediaQuery } from "react-responsive";

const ImageSlide = styled.div`
  justify-content: center;
  position: relative;
  width: 100%;
  margin: auto;
`;

const SlideBox = styled.div`
  position: relative;
  width: ${(props) => (props.isPc ? "880px" : "220px")};

  margin: 100px auto;
  overflow-x: hidden;

  /* height: 300px; */
`;

const SlideList = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 5500px;
  transition: all 300ms ease 0s;
  overflow: hidden;
  transform: translate3d(${(props) => props.ci * -220}px, 0px, 0px);
`;

const SlideContent = styled.div`
  display: table;
  float: left;
  width: 200px;
  /* height: 200px; */
  margin: 0px 10px;
`;

const Picture = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin: 10px 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10%;
  border: 1px solid black;
`;

const ButtonStyle = styled.div`
  position: absolute;
  top: 180px;
  width: 50px;
  height: 50px;
  padding: 25px;
  vertical-align: middle;
  background-color: #ffe599;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 20px;
  }
`;

const BeerButtonPrev = styled(ButtonStyle)`
  left: 60px;
`;

const BeerButtonNext = styled(ButtonStyle)`
  right: 60px;
`;

const SojuButtonPrev = styled.div`
  left: -3px;
  position: absolute;
  top: 480px;
  width: 100px;
  height: 100px;
  padding: 15px;
  vertical-align: middle;
  background-color: red;
`;
const SojuButtonNext = styled.div`
  right: -10px;
  position: absolute;
  top: 480px;
  width: 100px;
  height: 100px;
  padding: 15px;
  vertical-align: middle;
  background-color: red;
`;

const Slider = () => {
  const isPc = useMediaQuery({ query: "(min-width: 768px)" }, undefined);
  const [beer, setBeer] = useState([]);
  const [soju, setSoju] = useState([]);

  const getData = async () => {
    setBeer(await getAlcohol("beer"));
    setSoju(await getAlcohol("soju"));
  };

  useEffect(() => {
    getData();
  }, []);

  const [currentImage, setCurrentImage] = useState(3);
  const onChangeBeerContent = (pageDelta) => {
    const lastReviewPageNum = beer.length - 1;
    const newCurrentPageNum = currentImage + pageDelta;

    if (newCurrentPageNum < 0) {
      setCurrentImage(lastReviewPageNum);
    } else if (newCurrentPageNum > lastReviewPageNum) {
      setCurrentImage(0);
    } else {
      setCurrentImage(newCurrentPageNum);
    }
  };
  console.log(isPc);
  return (
    <ImageSlide>
      <SlideBox isPc={isPc}>
        <SlideList ci={currentImage} isPc={isPc}>
          {beer.map((beer, idx) => {
            return (
              <SlideContent key={idx}>
                <Picture>
                  <Img src={beer.img} />
                </Picture>
              </SlideContent>
            );
          })}
        </SlideList>
      </SlideBox>
      <BeerButtonPrev
        onClick={() => {
          onChangeContent(-1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </BeerButtonPrev>
      <BeerButtonNext
        onClick={() => {
          onChangeContent(+1);
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </BeerButtonNext>
      <SlideBox isPc={isPc}>
        <SlideList isPc={isPc}>
          {soju.map((alcol, idx) => {
            return (
              <SlideContent key={idx}>
                <Picture>
                  <Img src={alcol.img} />
                </Picture>
              </SlideContent>
            );
          })}
        </SlideList>
      </SlideBox>
      <SojuButtonPrev
        onClick={() => {
          onChangeContent(-1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </SojuButtonPrev>
      <SojuButtonNext
        onClick={() => {
          onChangeContent(+1);
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </SojuButtonNext>
    </ImageSlide>
  );
};

export default Slider;
