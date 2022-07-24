import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutContainer, StyledLayout } from '../components/HomeLayout'
import notfound from '../assets/notfound.png'
import popcorn404 from '../assets/popcorn404.svg'

import { Image } from 'antd'

const NotFinded:React.FC = () => {
  return (
    <LayoutContainer>
      <StyledLayout>
        <div style={{padding: '2rem', display:'flex', flexDirection:'column'}}>
          <Link to='/'>Back to home</Link>
          <Image src={notfound} width={300} preview={false}/>
        </div>
      </StyledLayout>
    </LayoutContainer>
  )
}

export default NotFinded