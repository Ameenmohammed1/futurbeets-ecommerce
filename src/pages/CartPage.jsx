import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import Cart from '../components/cart/Cart'
function Carts() {
  return (
    <Fragment>
        <Header/>
       <Cart/>
       <Footer/>
    </Fragment>
  )
}

export default Carts