import React from 'react'
import { BrowserRouter ,Link ,Route , Routes, useNavigate } from 'react-router-dom'

import Home from './Home'
import DataFile from './DataFile'
import About from './About'
import Contact  from './Contact'

const ParentRouting = () => {
  const aboutData ={
    compname: "TCS",
    locationcomp: "Pune",
    work: "Data analyst"
  }

// navigation 
const NavigateButtons =()=>{
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>navigate(-1)}>Previous</button>
      <button onClick={()=>navigate(1)}>Next</button>
    </div>
  )
}



  return (
    <div>

<BrowserRouter>

        <div><Link to="/">Home</Link></div>
        {/* passing data through query parameter */}
        <div><Link to="/datafile?name=Harsh&regno=12300915">Data</Link></div> 
        {/* data passing using state */}
        <div><Link to="/about" state={aboutData}>About</Link></div>
        <div><Link to="/contact?id=4">Contact</Link></div>
        {<NavigateButtons />}



<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/datafile" element={<DataFile />} />
    <Route path="/contact" element={<Contact />} />
    <Route  path= "/about" element={<About />}/>

</Routes>

</BrowserRouter>
        

       
    </div>
  )
}

export default ParentRouting