import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const loc = useLocation();
  const{compname,locationcomp,work} = loc.state || {};
  return (
    <div>
        <p>This is About page </p>
        <p>Company name is : {compname}</p>
        <p>company location is  : {locationcomp}</p>
        <p>company work is : {work}</p>
    </div>
  )
}

export default About