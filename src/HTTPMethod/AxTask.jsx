import React, { useState } from 'react'
import axios from 'axios'

const AxTask = () => {

  const [users, setusers] = useState([]);
  const [resMessage, setresMessage] = useState("");
  const [errMessage, seterrMessage] = useState("");

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setusers(res.data))
      .catch(err => console.log(err))
  }

  const deleteData = () => {
    axios.delete('https://jsonplaceholder.typicode.com/users/3')
      .then(res => {
        console.log(res.data);
        setresMessage("User Deleted Successfully");
        seterrMessage("");

        
        setusers(prev => prev.filter(item => item.id !== 3));
      })
      .catch(err => {
        console.log(err),
          seterrMessage("User Not Deleted successfully");
        setresMessage("");
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={deleteData}>Delete Data</button>

      <p style={{ color: "green" }}>{resMessage}</p>
      <p style={{ color: "red" }}>{errMessage}</p>

      {/* TABLE TO SHOW DATA */}
      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "80%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default AxTask
