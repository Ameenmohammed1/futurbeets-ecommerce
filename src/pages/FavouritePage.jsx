import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import Favourite from '../components/favourite/Favourite'

function FavouritePage() {
  return (
   <Fragment>
      <Header/>
      <Favourite/>
      <Footer/>
   </Fragment>
  )
}

export default FavouritePage