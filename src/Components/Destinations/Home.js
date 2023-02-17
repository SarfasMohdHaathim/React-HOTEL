import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"


const Destinations = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeadTitle />
      <AllItem />
      <Footer></Footer>
    </div>
  )
}

export default Destinations
