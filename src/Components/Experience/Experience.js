import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <>
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>    
                <div>
          <h4>css</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>    
                <div>
          <h4>Java Script</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>    
                <div>
          <h4>React.Js</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>      
              <div>
          <h4>BootStrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>      
              <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>     
               <div>
          <h4>Material UI</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>

        </div>
        <div className='experience_backend'>
        <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>     
              <div>
         <h4>Node.Js</h4>
          <small className='text-light'>Learner</small>
         </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
          <h4>Express</h4>
          <small className='text-light'>Learner</small>
          </div>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Learner</small>
          </div>
          </article>
          
          
          
        </div>
        </div>
      </div>


    </section>
    </>
  )
}

export default Experience