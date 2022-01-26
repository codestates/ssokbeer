import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/ssokbeerlogo.png";
import RigthNav from "./RigthNav";

import { logout } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setSocialType, setUserId, setUserInfo } from "../../action";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const Header = styled.header`
  /* position: relative; */
  display: flex;
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
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 200vh;
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
  padding: 0px 30px 35px 30px;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allReducer);

  const side = useRef(); //
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOutside = ({ target }) => {
    if (isOpen && !side?.current?.contains(target)) {
      CloseSideNav();
    }
  };
  const ChangeMenuVisibility = (input) => {
    setIsOpen(input);
  };

  const CloseSideNav = () => {
    setIsOpen(false);
  };
  const handleClickLogout = async () => {
    // axios.delete(`http://localhost:4000/user/logout`);

    localStorage.removeItem("isLogin");
    localStorage.removeItem("userId");
    localStorage.removeItem("socialType");
    await logout();
    dispatch(setLogin(false));
    dispatch(setUserId(null));
    dispatch(setSocialType(null));
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  useEffect(() => {
    dispatch(setLogin(Boolean(localStorage.getItem("isLogin")))); //이성의끈
    dispatch(setUserId(localStorage.getItem("userId")));
    dispatch(setSocialType(localStorage.getItem("socialType")));
  }, []);

  return (
    <Nav>
      <Header>
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
        <RigthNav
          isLogin={state.isLogin}
          isVisible={isOpen}
          ChangeMenuVisibility={ChangeMenuVisibility}
          handleClickLogout={handleClickLogout}
        />
      </Header>
      {isOpen ? (
        <SideNav ref={side}>
          <i onClick={CloseSideNav} className="fas fa-times" icon></i>
          <SideLink onClick={CloseSideNav} to="/">
            <Menu>홈</Menu>
          </SideLink>
          <SideLink onClick={CloseSideNav} to="/drink">
            <Menu>주류</Menu>
          </SideLink>
          <SideLink onClick={CloseSideNav} to="/community">
            <Menu>커뮤니티</Menu>
          </SideLink>
          {state.isLogin ? (
            <SideLink onClick={CloseSideNav} to="/mypage">
              <Menu>마이페이지</Menu>
            </SideLink>
          ) : (
            <SideLink onClick={CloseSideNav} to="/login">
              <Menu>로그인</Menu>
            </SideLink>
          )}
          {state.isLogin ? (
            <SideLink onClick={handleClickLogout} to="/">
              <Menu>로그아웃</Menu>
            </SideLink>
          ) : (
            <SideLink onClick={CloseSideNav} to="/signup">
              <Menu>회원가입</Menu>
            </SideLink>
          )}
        </SideNav>
      ) : null}
    </Nav>
  );
};

export default Navbar;
