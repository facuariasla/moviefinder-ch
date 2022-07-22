import React from 'react'
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
import logo from '../../public/popcorn-logo.svg'
import logoM from '../../public/movie-logo.png'
import MenuDrawer from './subcomponents/MenuDrawer';

const HeaderContainer = styled.header`
  background-color: #ffffff5f;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0  3rem;
  img{
    width: 40px;
  }
  @media screen and (max-width: 768px){
    padding: 0 1.5rem;

  }
`

const Header:React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <Link to='/'>
          <img src={logoM}/>
        </Link>
      </nav>
      <nav>
        <MenuDrawer/>
      </nav>
    </HeaderContainer>
  )
}

export default Header;