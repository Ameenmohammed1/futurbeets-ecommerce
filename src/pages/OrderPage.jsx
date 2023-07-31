import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import Order from '../components/order/Order'

function OrderPage() {
  return (
    <Fragment>
        <Header/>
        <Order/>
        <Footer/>
    </Fragment>
  )
}

export default OrderPage