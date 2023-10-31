import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <>
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/lalit-kumar-23a309243' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/LalitBhadu' target='_blank'><FaGithub/></a>
            <a href='https://instagram.com/lalit_bhadu?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><BsInstagram/></a>
        </div>
    </>
  )
}

export default HeaderSocials