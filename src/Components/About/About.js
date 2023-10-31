import React from 'react'
import "./About.css"
import ME from '../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FaHospitalUser} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'


function About() {
  return (
    <>
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className='container about_container'>
        <div className='about_me'>
        <div className='about_me-image'>
          <img src={ME} alt='About image'/>
        </div>

        </div>

        <div className='about_contant'>
        <div className='about_cards'>
        <article className='about_card'>
            <BsAwardFill className='about_icon'/>
           <h5>Experience</h5>
           <small>6+ Months Work Experience</small>
        </article>
        <article className='about_card'>
            <FaHospitalUser className='about_icon'/>
           <h5>Clients</h5>
           <small>5+ India </small>
        </article>
        <article className='about_card'>
            <AiFillFolderOpen className='about_icon'/>
           <h5>Projects</h5>
           <small>10+ Projects </small>
        </article>
        
         </div>

         <p>hello world hello world hello worldhello worldhello world hello world hello world hello world hello world hello worl 
         hello world hello world hello worldhello worldhello world hello world hello world hello world hello world hello world</p>
         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About