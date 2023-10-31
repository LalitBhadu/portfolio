import React from 'react'
import "./Header.css"
import Cta from './Cta'
import ME from '../assets/me.png'
import HeaderSocials from './HeaderSocials'


function Header() {
  return (
     <>
      <header>
        <div className='container header_container'>
        <h5>Hello I'am </h5>
        <h1>Lalit Kumar</h1>
        <h5 className='text-light'> FRONT END DEVELOPER</h5>
        <Cta/> 
        <HeaderSocials/>

         <div className='me'>
         <img src={ME}  alt='me'/>
         </div>
         
         <a href='#Contact'  className='scroll_down'>Scroll Down</a>

       

        </div>
      </header>


    </>  



)
}

export default Header