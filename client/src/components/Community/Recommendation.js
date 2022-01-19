import styled from "styled-components";

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
const RecommendPost = styled.div`
  /* height: 280px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: 80%;
`;

const PostTitle = styled.div`
  margin: 10px;
  text-align: center;
`;

const Recommendation = () => {
  return (
    <Section>
      <RecommendText>이달의 추천 TOP</RecommendText>
      <RecommendConatiner>
        <RecommendPost>
          <PostImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></PostImage>
          <PostTitle>천국의맛</PostTitle>
        </RecommendPost>
        <RecommendPost>
          <PostImage src="https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg"></PostImage>
          <PostTitle>환상특급 삼겹살파티</PostTitle>
        </RecommendPost>
        <RecommendPost>
          <PostImage src="https://sjnfzdfjrjgl1655541.cdn.ntruss.com/goods/3/2019/07/156_tmp_483b4b1bfca8c851ddea5f338f83fa928451view.jpg"></PostImage>
          <PostTitle>감바스 레시피 감잡앗으</PostTitle>
        </RecommendPost>
        <RecommendPost>
          <PostImage src="https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/76016_1610066802_LMWyrZIu.PNG"></PostImage>
          <PostTitle>say 치즈</PostTitle>
        </RecommendPost>
      </RecommendConatiner>
    </Section>
  );
};

export default Recommendation;
