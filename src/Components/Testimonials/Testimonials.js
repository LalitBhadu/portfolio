import React from 'react'
import "./testimonials.css"
import 'swiper/css';
import AVTR1 from "../assets/avatar1.jpg"
import AVTR2 from "../assets/avatar2.jpg"
import AVTR3 from "../assets/avatar3.jpg"
import AVTR4 from "../assets/avatar4.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';





const data=[
  {
    id:1,
    image:AVTR1,
    name:'larry grruy',
    role:'ceo',
    review:'process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines..',
  },
  {
    id:2,
    image:AVTR2,
    name:'jarry bhuty',
    role:'ceo',
    review:'process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines..',
  },
  {
    id:3,
    image:AVTR3,
    name:'jobus jiuty',
    role:'ceo',
    review:'process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines..',
  },
  {
    id:4,
    image:AVTR4,
    name:'nraatry grruy',
    role:'ceo',
    review:'process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines..',
  },
]


function Testimonials() {

  const swiper = useSwiper();


  return (
   <>
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2> 

      <Swiper className='container testimonials_container'
       modules={[ Pagination, Navigation, Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
       <button onClick={() => swiper.slideNext()}>
       {data.map((id,index) => {
        return(
          <SwiperSlide className='testimonial' key={id}>
         <div className='client_avatar'>
         <img src={id.image} alt='avtr 1'/>
          </div>
          <h5 className='client_name'>{id.name}</h5>
          <h6 className='client_role'>{id.role}</h6>

         <small className='client_review'>
             {id.review}
                   </small>
       </SwiperSlide>
        )
       })}
       </button>
      </Swiper>
       
     </section>
   </>
  )
}

export default Testimonials