import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate=useNavigate();
useEffect(()=>{
    localStorage.removeItem("authToken")
    navigate("/");
},[])
    
  return (
   <>
   
   </>
  )
}
export default Logout