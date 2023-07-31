import React from "react";
import "./brands.css";
import Zara from '../../images/zara.png'

// import Swiper core and required modules
import SwiperCore,{ Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Brands() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="brandParentDiv">
      <h2>Choose Your Brand</h2>
      <div className="brands">
      <Swiper
      // install Swiper modules
      modules={[Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 90
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 20
          }
      }}
      // autoplay={{
      //     delay: 1000,
      // }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="brand">
          <img className="brandImage" src={Zara} alt="" />
        </div>
      </SwiperSlide>

    </Swiper>
      </div>
    </div>
  );
}

export default Brands;
