import { Fragment } from "react"
import React from 'react'
import Header from "../components/user-header/Header"
import Banner from "../components/banner/Banner"
import TopCategory from "../components/topCategory/TopCategory"
import TodayDeal from "../components/todaysDeals/TodayDeal"
import OfferProdcuct from "../components/offerProduct/OfferProdcuct"
import Brands from "../components/brands/Brands"
import Services from "../components/ourServives/Services"
import Footer from "../components/footer/Footer"

function Home() {
  return (
<Fragment>
    <Header/>
    <Banner/>
    <TopCategory/>
    <TodayDeal/>
    <OfferProdcuct/>
    <Brands/>
    <Services/>
    <Footer/>
</Fragment>
  )
}

export default Home