import React from 'react'
import { useSelector } from 'react-redux'

const Login = () => {

  const count=useSelector(state=>state.count)
  return (
  
    <div>
      
      <p> count is:{count}</p>
      
      
      Login page
      
      
      </div>
  )
}

export default Login