import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./componants/componants.css"
import Navbar from './componants/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Hero from './componants/Hero'
import About from './componants/About'
import Services from './componants/Services '
import Projects from './componants/Projects'
import Footer from './componants/Footer'
import Skills from './componants/Skills'
function App() {
  return (
    <div className='custom-bg-primary'>
      <Navbar />
      <Hero /> 
      <About />
      <Services /> 
      <Skills />
      <Projects /> 
      <Footer /> 
    </div>
  )
}

export default App
