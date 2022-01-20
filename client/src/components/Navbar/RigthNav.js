import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const PcContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  z-index: 99999;
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const PageLink = styled(Link)`
  cursor: grab;
  text-decoration: none;
  color: black;
`;

const Page = styled.div`
  padding: 23px 20px;
  &:hover {
    font-weight: 600;
  }
`;
const ButtonLink = styled(Link)``;

const Button = styled.button`
  margin: 10px;
  width: 70px;
  height: 30px;
  border-radius: 10%;
  background-color: #fed969;
  cursor: grab;
`;

// eslint-disable-next-line
const RigthNav = ({ isVisible, ChangeMenuVisibility }) => {
  const closeMenu = () => ChangeMenuVisibility(false);
  const isPc = useMediaQuery({ query: "(min-width: 768px)" }, undefined, closeMenu);

  return isPc ? (
    <PcContainer>
      <PageLink to='/drink'>
        <Page>주류</Page>
      </PageLink>
      <PageLink to='/food'>
        <Page>안주</Page>
      </PageLink>
      <PageLink to='/community'>
        <Page>커뮤니티</Page>
      </PageLink>
      <ButtonLink to='/login'>
        <Button>로그인</Button>
      </ButtonLink>
      <ButtonLink to='/signup'>
        <Button>회원가입</Button>
      </ButtonLink>
    </PcContainer>
  ) : (
    <MobileNav>
      {isVisible ? undefined : <i className='fas fa-bars' onClick={() => ChangeMenuVisibility(!isVisible)}></i>}
    </MobileNav>
  );
};
export default RigthNav;
