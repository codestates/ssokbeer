import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/ssokbeerlogo.png";
import RigthNav from "./RigthNav";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
`;

const Header = styled.header`
  /* position: relative; */
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 20px;
  box-shadow: 0 4px 4px -4px #f1c74c;
  background-color: white;
  i {
    font-size: 25px;
    cursor: pointer;
    color: black;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const SideNav = styled.div`
  /* position: absolute; */
  z-index: 1;
  /* right: 0;
  top: 0; */
  width: 40%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  float: right;
  animation: slidein 0.7s ease-in-out;
  animation: boxFade 0.5s ease-out;
  border: 0.5px solid grey;

  /* background-color: rgba(247, 227, 171, 0.4); */

  i {
    text-align: right;
    font-size: 20px;
    cursor: pointer;
    padding: 13px;
    margin: 10px;
  }

  @keyframes slidein {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(500px);
    }
  }

  @keyframes boxFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Menu = styled.div`
  margin-top: 70px;
  text-align: center;
  /* color: rgba(0, 0, 0, 0.4); */
  font-family: "Open Sans", sans-serif;
  &:hover {
    font-weight: 800;
    color: #f1c74c;
  }
`;

const SideLink = styled(Link)`
  cursor: grab;
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  const side = useRef(); //
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClickOutside = ({ target }) => {
    if (isOpen && !side?.current?.contains(target)) {
      CloseSideNav();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const ChangeMenuVisibility = (input) => {
    setIsOpen(input);
  };

  const CloseSideNav = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      {isOpen ? (
        <SideNav ref={side}>
          <i onClick={CloseSideNav} className='fas fa-times' icon></i>
          <SideLink onClick={CloseSideNav} to='/drink'>
            <Menu>주류</Menu>
          </SideLink>
          <SideLink onClick={CloseSideNav} to='/food'>
            <Menu>안주</Menu>
          </SideLink>
          <SideLink onClick={CloseSideNav} to='/community'>
            <Menu line>커뮤니티</Menu>
          </SideLink>
          {isLogin ? (
            <SideLink onClick={CloseSideNav} to='/mypage'>
              <Menu>마이페이지</Menu>
            </SideLink>
          ) : (
            <SideLink onClick={CloseSideNav} to='/login'>
              <Menu>로그인</Menu>
            </SideLink>
          )}
          <Menu>{isLogin ? "로그아웃" : null}</Menu>
        </SideNav>
      ) : null}
      <Header>
        <LogoLink to='/home'>
          <Logo src={logo} />
        </LogoLink>
        <RigthNav isVisible={isOpen} ChangeMenuVisibility={ChangeMenuVisibility} />
      </Header>
    </Nav>
  );
};

export default Navbar;
