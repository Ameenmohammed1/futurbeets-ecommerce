function razorpayOpen (){
    
   var options = {
    "key": "rzp_test_4wpXkwECuBHwsN", 
    "amount": "49900", 
    "currency": "INR",
    "name": "Dummy Academy",
    "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
     "image": '',
    "order_id": "order_HdPuQW0s9hY9AU",  
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
  
document.getElementById('pay-button').onclick = function(e){
    razorpayObject.open();
    e.preventDefault();
}
}

module.exports={razorpayOpen}