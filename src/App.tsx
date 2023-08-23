import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { LandingPage } from "./components/landingPage"
import { Footer } from "./components/shared/Footer"
import { Navbar } from "./components/shared/Navbar"
import { AboutIndex } from './components/aboutPage/Index';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/about' element={<AboutIndex />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
