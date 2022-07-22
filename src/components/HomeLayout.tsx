import React from 'react'
import styled, { css } from "styled-components";
import AllMoviesContainer from './AllMoviesContainer';
import Header from './Header';

export const LayoutContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
export const StyledLayout = styled.div`
 background-color: gray;
 width: 1920px;
 min-height: 100vh;
`
const HomeLayout:React.FC = () => {
  return (
    <LayoutContainer>
      <StyledLayout>
      {/* Page content */}
        <Header/>
        <AllMoviesContainer/>
      </StyledLayout>
    </LayoutContainer>
  )
}

export default HomeLayout