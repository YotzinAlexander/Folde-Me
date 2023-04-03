import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination'
import './NavBar.css'


import image1 from '../../assets/codeIcon.png'

export const NavBar = () => {
    
    const slides = [
        {
          name: "Leguajes, Framework, Software",
          image: image1,
          items: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "TYPESCRIPT",
            "IONIC",
            "ANGULAR",
            "REACT",
            "JAVA 8",
            "NODE JS",
            "MONGO DB",
            "MYSQL",
            "ROBO 3T",
            "POSTMAN",



          ]
        }
      ];

  return (
    <nav>
    <img src='./src/assets/codePC.png' alt="" />
    <div className='nav-items'>
      <div className='dropdown'>
        <button>Habilidades</button>

        <div className='menu'>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true}}
          >
            {slides?.map((slide) => (
               <SwiperSlide key={slide.name}>
                 <img src={slide.image} alt="" />
                 <div>
                   <h2>{slide.name}</h2>
                   <div className='links'>
                     {slide.items?.map((item) => (
                       <span>{item}</span>
                     ))}
                   </div>
                 </div>
               </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <a href=""> Acerca de mi </a>
      <a href=""> Contacto </a>
    </div>
  </nav>
  )
}
