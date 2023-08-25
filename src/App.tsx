import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LandingPage } from "./components/landingPage"
import { AboutIndex } from './components/aboutPage/Index';
import { Loginindex } from './components/loginPage';
import { Contactindex } from './components/contactPage';
import { Tutorialindex } from './components/tutorialsPage';
import { SignUpindex } from './components/SignUpPage';
import { OrganizationPage } from './components/SignUpPage/OrganizationPage';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/about' element={<AboutIndex />}/>
      <Route path='/login' element={<Loginindex />}/>
      <Route path='/contact' element={<Contactindex />}/>
      <Route path='/tutorial' element={<Tutorialindex />}/>
      <Route path='/signup' element={<SignUpindex />}/>
      <Route path='/signup-next' element={<OrganizationPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
