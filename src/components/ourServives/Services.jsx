import React from "react";
import "./services.css";
import freeDelivery from "../../images/free-home-delivery-p.jpg";
import AllIndiaDelivery from '../../images/all-india-delivery.jpg'
import securePayment from '../../images/secure-payment-with-mobile.jpg'
function Services() {
  return (
    <div className="servicesParent">
      <h2>Our Services and Features</h2>
      <div className="services">
        <div className="service">
          <div className="serviceDetails">
            <h2>
              Free And Fast <br /> Home Delivery
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            </p>
          </div>
          <div className="serviceImage">
            <img src={freeDelivery} alt="" />
          </div>
        </div>
        <div className="service">
          <div className="serviceDetails">
            <h2>
              Secure Online <br /> Payment Process
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            </p>
          </div>
          <div className="serviceImage">
            <img src={securePayment} alt="" />
          </div>
        </div>
        <div className="service">
          <div className="serviceDetails">
            <h2>
              All India Free <br /> Home Delivery
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            </p>
          </div>
          <div className="serviceImage">
            <img src={AllIndiaDelivery} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
