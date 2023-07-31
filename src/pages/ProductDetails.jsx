import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import ProductDetail from '../components/productDetails/ProductDetails'
import Footer from '../components/footer/Footer'
function ProductDetails() {
  return (
    <Fragment>
        <Header/>
        <ProductDetail/>
        <Footer/>
    </Fragment>
  )
}

export default ProductDetails