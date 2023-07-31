import React, { useState, Fragment, useEffect } from "react";
import "./productDetail.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import RelatedProduct from "../relatedProduct/RelatedProduct";

import image from '../../images/all-india-delivery.jpg'
function ProductDetails() {
 
  const [activeThumb, setActiveThumb] = useState(null);
  return (
    <Fragment>
      <div className="ProductDetailsParent">
        <div className="productImages">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            grabCursor={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mainProductSlider"
          >
           
              return (
                <SwiperSlide>
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={image}
                  />
                </SwiperSlide>
              );
         
          </Swiper>
          <div className="swiperThubs">
            <Swiper
              onSwiper={setActiveThumb}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="smallImage"
            >
              
               
                  <SwiperSlide>
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={image}
                    />
                  </SwiperSlide>
                
            
            </Swiper>
          </div>
        </div>
        <div className="productDetails">
          <div className="mainDetails">
            <h1>'kk'</h1>
            <p className="shortDetails">
              kk
            </p>
          
            <p className="price">
              ₹00
              <span className="sp1">
                <del>₹00</del>
              </span>{" "}
            <span className="sp2">00%</span>
            </p>

            <div className="btns">
              <a href="#">Add To Cart</a>
              <a href="#">Buy Now</a>
            </div>
          </div>
          <hr />
         
          <div
            className="Discription"
            dangerouslySetInnerHTML={{
              __html: '<h1>hello</h1>',
            }}
            
          ></div>
        </div>
      </div>
      <RelatedProduct />
    </Fragment>
  );
}

export default ProductDetails;
