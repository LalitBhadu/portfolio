import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
// import {AiFillGithub} from 'react-icons/ai'



function Footer() {
  return (
   <footer>
    <a href='#' className='footer_logo'>Lalit Bhadu</a>

    <ul className='permalinks'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#service'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href='https://facebook.com' target='_blank'><AiFillFacebook/></a>
      <a href='https://instagram.com/lalit_bhadu?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><AiFillInstagram/></a>
      {/* <a href='https://github.com/LalitBhadu' target='_blank'><AiFillGithub/></a> */}
    </div>

    <div className='footer_copywrite'>
    <small>&copy; LalitBhadu @ All Rights Reserved</small>
     </div>

   </footer>
  )
}

export default Footer