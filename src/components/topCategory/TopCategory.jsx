import React from 'react'
import './topCategory.css'

//swipers
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function TopCategory() {
  return (
    <div className='topCategoryParent'>
        <h2>Shop Our Top Categories</h2>
        <div className="categories">
        <Swiper
       
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    
      slidesPerView={5}
      breakpoints={{
        320: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 6,
            spaceBetween: 20
          }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="categorie">
            <img className='categoryImage' src="" alt="" />
            <h3 className='cateName'>Furniture</h3>
        </div>
      </SwiperSlide>

    </Swiper>
        </div>
    </div>
  )
}

export default TopCategory