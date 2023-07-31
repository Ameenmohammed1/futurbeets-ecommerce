import React, { useEffect, useState } from "react";
import "./todayDeal.css";

//swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import images from '../../images/all-india-delivery.jpg'
function TodayDeal() {
 
  return (
    <div className="todayDeal">
      <h2>Today Best Deals For You!</h2>
      <div className="products">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          scrollbar={{ draggable: true }}
        >
         
            
              <SwiperSlide>
                <div
                  
                  className="product"
                >
                  <div className="proImage">
                    <i  class="fa-sharp fa-regular fa-heart"></i>
                    <img
                      className="image"
                      src={images}
                      alt=""
                    />
                  </div>
                  <div className="proDetails">
                    <p  className="name">kk</p>
                    <p className="shortDetail">kk</p>
                    <div className="prices">
                      {" "}
                      <p  className="price">
                       kk{" "}
                        <span className="delPrice">
                          <del>$00</del>
                        </span>
                      </p>
                    </div>
                 
                    <button  className="cartBtn">Add To Cart</button>
                  </div>
                </div>
              </SwiperSlide>
            
       
        </Swiper>
      </div>
    </div>
  );
}

export default TodayDeal;
