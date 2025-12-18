import React, { useState } from 'react'
import axios from 'axios'


const HTTPAxiosMethod = () => {

    const [users, setusers] = useState([]);
    const [resMessage , setresMessage] = useState("")
    const [errMessage , seterrMessage] = useState("")

    const fetchData =()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setusers(res.data))
    .catch(err=>console.log(err))

    }

    const fetchSingleData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/4')
    .then(res=>setusers([res.data]))
    .catch(err=>console.log(err))

    }


    const postData = () =>{
        const newData ={
            name:"Ankita",
            username:"Ankita2610",
            email : "ankita2610@gmail.com"

        }
        axios.post('https://jsonplaceholder.typicode.com/users',newData)
        .then(res=>{
            console.log(res.data);
            setresMessage("User added Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User Not added successsfully ");
            setresMessage("");
        })

    }
    


    const putData = ()=>{

        const updateData ={
            name:"Ankita",
            username:"Ankita2611",
            email : "ankita2611@gmail.com"

        }
        axios.put('https://jsonplaceholder.typicode.com/users/3',updateData)
        .then(res=>{
            console.log(res.data);
            setresMessage("User updated Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User Not updated successsfully ");
            setresMessage("");
        })


    }

    const deleteData = ()=>{

        
        axios.delete('https://jsonplaceholder.typicode.com/users/3')
        .then(res=>{
            console.log(res.data);
            setresMessage("User Deleted Successfully");
            seterrMessage("");
        })
        .catch(err=>{
            console.log(err),
            seterrMessage("User Not Deleted successsfully ");
            setresMessage("");
        })

    }


  return (
    <div>
        {/* fetch multiple data */}
        <button onClick={fetchData}>Fetch Data</button>

        {/* fetch single data */}
        <button onClick={fetchSingleData}>Fetch Single Data : (ID:4)</button>

        {/* post==or add new id */}
        <button onClick={postData}>Post Data </button>

        {/* put == or update data */}
        <button onClick={putData}>Put Data </button>

        {/* delete data */}
         <button onClick={deleteData}>Delete Data </button>

        <p>{resMessage}</p>
        <p>{errMessage}</p>


        <ul>
        {
          users.map((item) => (
            <li key={item.id}>
              <b>ID:</b> {item.id} <br />
              <b>Name</b> {item.name} <br />
              <b>Username</b> {item.username} <br />
              <b>Email:</b> {item.email} <br />
              <hr />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HTTPAxiosMethod