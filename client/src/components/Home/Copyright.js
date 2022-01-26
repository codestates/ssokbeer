import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fdf4d9;
  height: 200px;
`;
const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  /* border: 1px solid blue; */
`;

// const ClientContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid blue;
//   align-items: center;
// `;

const ServiceBox = styled.div`
  display: flex;
  align-items: center;
  color: #444444;
  min-width: 300px;
  margin: 0px 10px;
  i {
    font-size: 30px;
  }
`;

const Service = styled.a`
  font-size: 25px;
  margin-right: 10px;
  color: #444444;
  text-decoration: none;
`;

const TeamInformbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  /* border: 1px solid red; */
`;
const Blanckbox = styled.div`
  height: 55%;
  /* border: 1px solid purple; */
`;

const MemberBox = styled.div`
  margin: 10px 10px 10px 10px;
  min-width: 300px;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
`;

const GithubLink = styled.a`
  text-decoration: none;
  color: #444444;
`;

const DivContianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
const Divbox = styled.div`
  /* border: 1px solid red; */
  margin: 3px 10px;
  color: #444444;
  min-width: 500px;
`;

const Copyright = () => {
  return (
    <Container>
      <InformContainer>
        <Blanckbox />
        <ServiceBox>
          <Service href="https://github.com/codestates/ssokbeer">서비스소개</Service>
          <i className="fab fa-github"></i>
        </ServiceBox>
        <TeamInformbox>
          <MemberBox>
            <GithubLink>팀원</GithubLink>
            <GithubLink href="https://github.com/sophiecode1105" target="_blank">
              이채영
            </GithubLink>
            <GithubLink href="https://github.com/codingbe" target="_blank">
              김정환
            </GithubLink>
            <GithubLink href="https://github.com/KongJin" target="_blank">
              진공
            </GithubLink>
            <GithubLink href="https://github.com/StrummingDown" target="_blank">
              윤대규
            </GithubLink>
          </MemberBox>
        </TeamInformbox>
        <DivContianer>
          <Divbox>서울 서초구 서초대로 396, 20층 스파크플러스 </Divbox>
          <Divbox>copyright © 2022 sookbeer all rights reserved </Divbox>
        </DivContianer>
      </InformContainer>
      {/* <ClientContainer>
        <div>고객센터</div>
        <div>1대1 이메일 문의</div>
      </ClientContainer> */}
    </Container>
  );
};

export default Copyright;
