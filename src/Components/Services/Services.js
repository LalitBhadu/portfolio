import React from 'react'
import './Services.css'
import {BsCheck2All} from 'react-icons/bs'

function Services() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>UI/UX design is a multidisciplinary approach to creating digital 
            products and applications that prioritize both the User Interface (UI) 
            and User Experience (UX) aspects of design. It involves crafting a seamless 
            and enjoyable interaction between users and digital interfaces while considering the
             overall user journey and satisfaction.<br></br><br></br></p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>Welcome to My Portfolio Website,
             where innovation meets excellence. As a Developer, I am specialize in crafting cutting-edge websites
              that not only look stunning but also deliver exceptional user experiences. With a customer-centric approach,
               i Am take pride in exceeding your expectations and helping your business thrive in the online world. 
               Explore our services and let us be your trusted partner in building a strong online presence.</p>
           </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>Embrace innovation with us leading App Development.
             We are a team of talented professionals dedicated to transforming your
              app ideas into reality. From concept to deployment, our experts specialize 
              in creating cutting-edge mobile apps that captivate users and drive results.
               Partner with us and discover the power of
               seamless, user-friendly, and high-performance apps.</p>
            </li>
          </ul>
        </article>
        {/* <article className='service'>
          <div className='service_head'>
            <h3>Search Engine Optimization</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
          </ul>
        </article> */}
      </div>



    </section>
  )
}

export default Services