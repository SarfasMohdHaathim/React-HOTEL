import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllBlog from "./AllBlog"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"


const Blog = () => {
  return (
    <>
    <Navbar></Navbar>
      <HeadTitle />
      <AllBlog />
      <Footer></Footer>
    </>
  )
}

export default Blog
