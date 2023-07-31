import React, { useEffect, useState } from "react";
import "./favourite.css";
import image from '../../images/all-india-delivery.jpg'
function Favourite() {
 
  return (
    <div className="FavouriteParent">
      <h2>Your Favourites</h2>
      <div className="favourites">
        
         
         
              <div className="favourite" >
              <div className="product">
                <div className="proImage">
                  <i className="fa-solid fa-trash"></i>
                  <img
                    className="image"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="proDetails">
                  <p className="name">hh</p>
                  <p className="shortDetail">hh</p>
                  <div className="prices">
                    {" "}
                    <p className="price">
                    $ 00{" "}
                      <span className="delPrice">
                        $<del>00</del>
                      </span>
                    </p>
                  </div>
                 
                  <button className="cartBtn">Add To Cart</button>
                </div>
              </div>
                </div>
            
      
      
      </div>
    </div>
  );
}

export default Favourite;
