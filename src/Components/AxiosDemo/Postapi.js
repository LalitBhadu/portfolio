import React, { useState } from 'react'
import axios from 'axios'

function Postapi() {
    const data = {username:" ", useremail:" "}
    const [userData, setUserData]=useState(data)



    const handleData = (e) =>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/users", userData)
        .then((response)=>{
            console.log(response)
        })
    }


    const handleUpdate = (e) =>{
        e.preventDefault();

        axios.put("https://jsonplaceholder.typicode.com/users/1", userData)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleDelete = (e) =>{
        e.preventDefault();

        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }

  return (
    <>
        <h1>Post API</h1>
        <p>This is a post api page.</p>
        <lable>name</lable>
        <input type='text' name='username' value={userData.username} onChange={handleData} placeholder='Your name' required/><br></br>
        <label>email</label>
        <input type='text' name='useremail' value={userData.useremail} onChange={handleData} placeholder='your email' required/><br></br>
        <button type='submit' onClick={handleSubmit}>Submit</button><br></br>
        <button  onClick={handleUpdate}>update</button><br></br>
        <button  onClick={handleDelete}>Delete</button>


    </>
  )
}

export default Postapi