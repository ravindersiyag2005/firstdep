import React from 'react'
import {  BrowserRouter ,Link ,Route , Routes, useNavigate } from 'react-router-dom'




const ParentRouting2 = () => {




  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home1/>}/>
         <Route path='/recipedetails' element={<Recipe/>}/>

    </Routes>

    </BrowserRouter>

    </div>
  )
}

export default ParentRouting2