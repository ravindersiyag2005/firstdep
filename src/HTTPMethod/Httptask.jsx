import React, { useState } from 'react';

const Httptask = () => {
  const [users, setusers] = useState([]);
  const [resMessage, setresMessage] =useState("");
  const [errMessage, seterrMessage] =useState("")


  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setusers(data.users);
      })
      .catch(err => console.log(err));
  };



  const postData = () =>{

    const newData ={
        userId: 300,
        title:"react"
    }



    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify(newData),
        headers : {"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("New Data is :",data);
        setresMessage("POST added Successfully");
        seterrMessage("");

    })
    .catch(()=>{
        setresMessage("");
        seterrMessage("POST not added Successfully");
        
    })
}

   const putData = () =>{
    const updatedData ={
        userId : 300,
        title:"react"

    }

    fetch('https://jsonplaceholder.typicode.com/posts/2',{
        method:"PUT",
        body:JSON.stringify(updatedData),
        headers : {"Content-Type":"application/json"}
    })
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error('$res.status')
        }
        return res.json()
    })
    .then(data=>{
        console.log("New Data is :",data);
        setresMessage("Post updated Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        setresMessage("");
        seterrMessage("Post Not Updated Successfully ")
    })
   }



  


  return (
    <div>
      <button type='submit' onClick={fetchData}>Fetch Data</button>
       <button type='submit' onClick={postData}>POST Data</button>
       <button type='submit' onClick={putData}>PUT Data</button>
       <p>{resMessage}</p>
       <p>{errMessage}</p>

      <ul>
        {
          users.map((item) => (
            <li key={item.id}>
              <b>ID:</b> {item.id} <br />
              <b>Firstname</b> {item.firstName} <br />
              <b>Lastname:</b> {item.lastName} <br />
              <hr />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Httptask;
