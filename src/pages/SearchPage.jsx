import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import Search from '../components/Search/Search'

function SearchPage() {
  return (
   <Fragment>
    <Header/>
    <Search/>
    <Footer/>
   </Fragment>
  )
}

export default SearchPage