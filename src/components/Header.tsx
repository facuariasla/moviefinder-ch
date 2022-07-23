import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import logoM from "../../public/movie-logo.png";
import MenuDrawer from "./subcomponents/MenuDrawer";

const HeaderContainer = styled.header`
  background-color: rgb(25, 25, 25);
  box-shadow:
  0px 9px 6px -3px rgba(0, 0, 0, 0.236)
;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  img {
    width: 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <img src={logoM} />
        </Link>
      </nav>
      <nav>
        <MenuDrawer />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
