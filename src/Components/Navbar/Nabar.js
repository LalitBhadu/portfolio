import { useState } from 'react'
import './Nabar.css'
import {FcHome} from 'react-icons/fc'
import {FaUserSecret} from 'react-icons/fa'
 import {FaLaptopCode  } from 'react-icons/fa'
 import {RiServiceFill  } from 'react-icons/ri'
 import {FcContacts  } from 'react-icons/fc'
 import {MdWork  } from 'react-icons/md'
 import {MdOutlineReviews  } from 'react-icons/md'







function Nabar() {

const [activeNav, setActiveNav] = useState('#')

  return (
    <>
        <nav>
          <a href='#' 
          className={activeNav === '#' ? 'active' : ''}
          onClick={()=>setActiveNav('#')}>
          <FcHome/>
          </a>

          <a href='#about' 
          className={activeNav === '#about' ? 'active' : ''}
          onClick={()=>setActiveNav('#about')}
          ><FaUserSecret/>
          </a>

          <a href='#experience'
          className={activeNav === '#experience' ? 'active' : ''}
          onClick={()=>setActiveNav('#experience')}
          ><FaLaptopCode/>
          </a>

          <a href='#service'
          className={activeNav === '#service' ? 'active' : ''}
          onClick={()=>setActiveNav('#service')}
          ><RiServiceFill/>
          </a>

          <a href='#portfolio'
          className={activeNav === '#portfolio' ? 'active' : ''}
          onClick={()=>setActiveNav('#portfolio')}
          ><MdWork/>
          </a>

          <a href='#testimonials'
          className={activeNav === '#testimonials' ? 'active' : ''}
          onClick={()=>setActiveNav('#testimonials')}
          ><MdOutlineReviews/>
          </a>

          <a href='#contact'
          className={activeNav === '#contact' ? 'active' : ''}
          onClick={()=>setActiveNav('#contact')}
          ><FcContacts/>
          </a>

        </nav>
    </>
  )
}

export default Nabar