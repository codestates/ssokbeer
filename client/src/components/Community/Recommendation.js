import styled from "styled-components";
import RecomendContent from "./RecomendContent";

const Section = styled.section`
  max-width: 1280px;
  width: 100%;
  padding: 100px 15px 0px 15px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255);
  /* border: 1px solid black; */
`;

const RecommendText = styled.h1`
  margin: 15px 0px;
  font-size: 23px;
  font-weight: 400;
  /* border: 1px solid red; */
`;

const RecommendConatiner = styled.div`
  width: 100%;
  /* margin: auto; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 290px;
  grid-gap: 24px;
  /* padding: 10px; */
`;

const Recommendation = ({ rankContent }) => {
  return (
    <Section>
      <RecommendText>이달의 추천 TOP</RecommendText>
      <RecommendConatiner>
        {rankContent.map((content) => {
          return <RecomendContent content={content} />;
        })}
      </RecommendConatiner>
    </Section>
  );
};

export default Recommendation;
