import React from "react"
import Footer from "../../Common/footer/Footer"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import ContactFrom from "./ContactFrom"
import Navbar from "../../Common/Navbar/Navbar"

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>

      <HeadTitle />
      <ContactFrom />
      <Footer></Footer>
    </>
  )
}

export default Contact
