import React from 'react'
import "./Portfolio.css"
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

const lalit = [
  {
    id:1,
    image:IMG1,
    title:'Cripto currency Dashboard & Financial',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  },
  {

    id:2,
    image:IMG2,
    title:'E-commerce',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  },
  {

    id:3,
    image:IMG3,
    title:'CRM',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  },
  {

    id:4,
    image:IMG4,
    title:'Blog website',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  }
,
  {

    id:5,
    image:IMG5,
    title:'Cripto currency Dashboard & Financial',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  },
  {

    id:6,
    image:IMG6,
    title:'Cripto currency Dashboard & Financial',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  
  }
]


function Portfolio() {
  return (
    <>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
         {
          lalit.map((id,index) => {
            return(
              <article className='portfolio_item' key={id}>
            <div className='portfolio_item-image'>
            <img src={id.image} alt='img 1'/>
            </div>
            <h3>{id.title}</h3>
           <div className='portfolio_item-cta'>
           <a href={id.github} alt="" className='btn'>Github</a>
            <a href={id.demo} target='_blank' className='btn btn-primary'>Live Demo</a>
           </div>
          </article>
            )
          })
         }
          
        </div>
      </section>
    </>
  )
}

export default Portfolio