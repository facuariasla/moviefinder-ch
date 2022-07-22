import React from 'react'
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: tomato;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0  1rem;
`

const Header:React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <Link to='/'>LOGO</Link>
      </nav>
      <nav>BOTONES</nav>
    </HeaderContainer>
  )
}

export default Header;