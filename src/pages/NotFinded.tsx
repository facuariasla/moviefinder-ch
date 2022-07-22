import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutContainer, StyledLayout } from '../components/HomeLayout'
import notfound from '../../public/notfound.png';

const NotFinded:React.FC = () => {
  return (
    <LayoutContainer>
      <StyledLayout>
        <div style={{padding: '2rem', display:'flex', flexDirection:'column'}}>
          <Link to='/'>Back to home</Link>
          <img src={notfound} style={{width:'300px'}}/>
        </div>
      </StyledLayout>
    </LayoutContainer>
  )
}

export default NotFinded