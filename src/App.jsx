import React from "react"


import "./App.css"
import Home from './components/Home'
import About from "./components/About"
import Details from "./components/Details"
import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import Login from "./components/Login"

function App() {


  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/details" element={<Details />} />
     <Route path="/login" element={<Login />} />


      </Routes>
    
    </BrowserRouter>


  
  )
}


export default App

