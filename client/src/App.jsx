import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import {Toaster} from "react-hot-toast"




const App= () => {
  const [count, setCount] = useState(0)

  return (
    <>

   <BrowserRouter>
   <Toaster/>
   <Navbar/>
   <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/services' element ={<Services/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/signup' element ={<SingUp/>}/>



   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
