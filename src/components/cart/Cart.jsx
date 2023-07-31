import React, { useState, useEffect } from "react";
import "./cart.css";
import image from '../../images/all-india-delivery.jpg'
function Cart() {
  return (
    <div className="cartParent">
      <h1>Your Cart</h1>
      <div className="mainCart">
        <div className="carts">
         

            
              <div className="cart" >
                <div className="cartImg">
                  <img src={image} />
                </div>
                <div className="cartContent">
                  <h2 className="name">jjj</h2>
                  <p className="price">888</p>
                  <p className="shortDiscription">hh</p>
                  <div className="quantity">
                    <button
                    
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <p key={"ghdfgdfgsdrfg"}>hello</p>
                    <button
                      
                      className="minusBtn"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
                <i  class="fa-solid fa-xmark intu"></i>
              </div>
        
        </div>
        <div className="cartTwo">
          <h2>TOTAL</h2>
          <hr />
          <p className="amount">Total Amount : 000000</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
