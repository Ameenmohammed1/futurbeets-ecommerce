import React,{Fragment} from 'react'
import Header from '../components/user-header/Header'
import Footer from '../components/footer/Footer'
import SignUp from '../components/signUp/Signup'
function SignUpPage() {
  return (
   <Fragment>
  <Header/>
  <SignUp/>
  <Footer/>
   </Fragment>
  )
}

export default SignUpPage