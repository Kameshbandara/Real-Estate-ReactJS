import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';



function App() {
  

  return (
    <>
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/> 
      <Footer/>     
    </div>     
     
    </>
  )
}

export default App
