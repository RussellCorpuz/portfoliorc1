import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Swiper from './components/swiperport/Swiperport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Swiper />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
