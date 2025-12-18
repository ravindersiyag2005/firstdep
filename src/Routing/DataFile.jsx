import React from 'react'


const DataFile = () => {
const qparam = new URLSearchParams(window.location.search);
const name = qparam.get('name');
const regno = qparam.get('regno');
  return (
    <div>
    <p>This is Data File </p>
    <p>Name is : {name}</p>
    <p>Reg no : {regno}</p>
    </div>
    
  )
}

export default DataFile