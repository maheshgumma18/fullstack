import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Home = () => {
  
  const[temperature,SetTemperature]=useState('0')
  
  
  const getTemp=async ()=>{
  
    
    const data=  await axios.get("http://localhost:3000/weather",{city:"vizag"} )
    SetTemperature(data.data)
    console.log(data)
  }


  return (
    <div className='flex flex-col'>
    <div>Home</div>
       temperature is:{temperature}
    <button onClick={getTemp}>getTemperature</button>
    <button><Link to="/about">Go to About</Link></button>
    
    </div>
  )
}

export default Home