import React from 'react'

import { Outlet } from 'react-router-dom'
import Headert from './Headert'
import Footert from './Footert'

function TechSite() {
  return (
    <>
    <div className='bg-linear-to-br from-slate-900 via-purple-800 to-slate-900 '>
        <Headert/>
        <Outlet/>
        <Footert/>
    </div>
      
    </>
  )
}

export default TechSite
