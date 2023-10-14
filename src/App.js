import React, {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Images from './images/gradient.jpg';
import BackImage from './images/gradient2.jpg';
import AOS from 'aos'
import'aos/dist/aos.css'

function App() {

  useEffect(()=> {
    AOS.init({once: "true"})
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
