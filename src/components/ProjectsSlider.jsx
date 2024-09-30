import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectsSlider.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';
import pic7 from '../assets/images/pic7.jpg';

export function ProjectsSlider() {
  return (
    <section id='Projects'>

    <div className="container" >
      <h1 className="heading">Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >
        <SwiperSlide>
          <img src={pic1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
        </section>
  );
}

export default ProjectsSlider;
