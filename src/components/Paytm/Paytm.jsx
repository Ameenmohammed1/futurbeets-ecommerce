import React from 'react'
import axios from '../../axios'
function Paytm() {
  function razorpayOpen (order_id){
    
    var options = {
     "key": "rzp_test_4wpXkwECuBHwsN", 
     "amount": "49900", 
     "currency": "INR",
     "name": "Dummy Academy",
     "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
      "image": '',
     "order_id": order_id,  
     "handler": function (response){
         console.log(response)
         alert("This step of Payment Succeeded");
     },
     "prefill": {
        //Here we are prefilling random contact
       "contact":"9876543210", 
         //name and email id, so while checkout
       "name": "Twinkle Sharma",  
       "email": "smtwinkle@gmail.com"
     },
    "notes" : {
       "description":"Best Course for SDE placements",
       "language":"Available in 4 major Languages JAVA, C/C++, Python, Javascript",
       "access":"This course have Lifetime Access"
     }, 
     "theme": {
         "color": "#2300a3"
     }
 };
 var razorpayObject = new Razorpay(options);
 console.log(razorpayObject);
 razorpayObject.on('payment.failed', function (response){
       console.log(response);
       alert("This step of Payment Failed");
 });
     razorpayObject.open();
     e.preventDefault();
 }
    const handlePayment = async () => {
        await axios.post('/createOrder',{
          amount : 3000*100,
          currency : 'INR',
          receipt: 'nksbfgvsdiugy789er623874',
        }).then((data)=>{
          console.log(data.data);
          razorpayOpen (data.data.id)
        }).catch((err)=>{
       
        })
      };
    
      return (
        <div>
          <h1>Payment App</h1>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      );
}

export default Paytm