import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import CheckOut from '../components/checkOut/CheckOut'

function CheckOutPage() {
  return (
   <Fragment>
    <Header/>
    <CheckOut/>
    <Footer/>
   </Fragment>
  )
}

export default CheckOutPage