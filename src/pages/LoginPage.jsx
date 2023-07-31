import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import Login from '../components/LogIn/Login'

function LoginPage() {
  return (
    <Fragment>
        <Header/>
        <Login/>
        <Footer/>
    </Fragment>
  )
}

export default LoginPage