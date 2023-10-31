import React from 'react'
import "./Homepage.css"
import Header from './Header/Header'
import Nabar from "./Navbar/Nabar"
import About from './About/About'
import Experience from './Experience/Experience'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function Homepage() {
  return (
    <>
    <Header/>
    <Nabar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Homepage