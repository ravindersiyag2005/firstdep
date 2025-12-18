import React, {useState, useEffect } from 'react'
import axios from 'axios';

const Contact = () => {
  const qparam= new URLSearchParams(window.location.search);
  const id = qparam.get('id');

  const [users, setusers] = useState([]);

useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=>setusers(res.data))
  .catch(err=>console.log(err))

},[]);

  

  return (
    <div>
        <p>This is Contact page</p>
        <p>Name is : {users.name}</p>
        <p>Username: {users.username}</p>
        <p>Email: {users.email}</p>
        <p>Phone : {users.phone}</p>
        <p></p>
    </div>
  )
}

export default Contact