import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Details = () => {

  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  return (
    <div>
   <div>Details page</div>
  <p>count is:{count}</p>
  <button onClick={()=>dispatch({type:'Increment'})} className='bg-amber-400 p-4 m-10'>increment</button>
  <button onClick={()=>dispatch({type:'Decrement'})}  className='bg-amber-400 p-4 m-10'>decrement</button>

   <Link to="/login">Login page</Link>
    </div>
    
  )
}

export default Details