import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footerParent">
      <div className="footerSctions">
        <h1>E-commerce</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          molestiae quia veniam consequatur 
        </p>
      </div>
      <div className="footerSctions">
        <p>Departments</p>
        <a href="#">Fasion</a>
        <a href="#">Shose</a>
        <a href="#">Gold and silvers</a>
        <a href="#">Sarees</a>
        <a href="#">Churithars</a>
        <a href="#">Beauty Products</a>
      </div>
      <div className="footerSctions">
        <p>Services</p>
        <a href="#">Gift Card</a>
        <a href="#">Mobile App</a>
        <a href="#">Shopping & Delivery</a>
        <a href="#">Order Pickup</a>
        <a href="#">Account Signup</a>
      </div>
      <div className="footerSctions">
        <p>Help</p>
        <a href="#">Shopcart Help</a>
        <a href="#">Returns</a>
        <a href="#">Track Orders</a>
        <a href="#">Contact Us</a>
        <a href="#">Feedback</a>
        <a href="#">Secure Payment</a>
      </div>
      <div className="footerSctions">
        <p>About Us</p>
        <a href="#">About Shopcart</a>
        <a href="#">careers</a>
        <a href="#">News & Blog</a>
        <a href="#">Help</a>
        <a href="#">Shopcart brand</a>
        <a href="#">Affilate & Partner</a>

      </div>
    </div>
  );
}

export default Footer;
