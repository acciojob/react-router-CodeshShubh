
import React from "react";
import './../styles/App.css';
import {BrowserRouter , Link, Route , Routes} from 'react-router-dom'
import Home from './Home'
import About from "./About";
const App = () => {
  return (
    <div>
      
      <BrowserRouter>

      <nav>
               <Link to={'/'}>Home</Link>  | 
               <Link to={'/about'}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
