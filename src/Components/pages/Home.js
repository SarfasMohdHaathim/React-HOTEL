import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"
import "./Home.css"


const Home = () => {

  return (
    <>
    

      <Navbar></Navbar>
      <Hero />
      <HomeAbout />
      <DestinationHome />
      <Download />
      <Works />
      <Footer></Footer>
    </>
  )
  }


export default Home
