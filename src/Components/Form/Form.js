import React, { useEffect, useState } from 'react'

function Form() {
    const data ={name:" ", email:" ", password:""}
    const [name, setName] = useState("data")
    const [flag, setFlag] = useState(false)
  

    useEffect(()=>{
        console.log("registerd")
    },[flag])


 function handledata(e){
    
    setName({...name,[e.target.name]:e.target.value})
    console.log(name)
 }

 function handleSubmit(e){
     e.preventDefault();
     if(!name.name || !name.email || !name.password){
        alert('All fields are required')
        // toast.error("enter your data")
     }
     else(
        setFlag(true)
     )
 }


  return ( 
    <>
    <pre>{(flag)?<h2>Hello{name.name}, you have Reagisted sucessfully </h2>:""}</pre>
        <form className='container' onSubmit={handleSubmit}>

            <h1>Register Form</h1>
        <div> 
        <label>Your Name</label>
            <input type='text' 
            placeholder='Your Name'
            name='name'
            value={name.name}
            onChange={handledata}
             /><br></br>
             <label>Your Email</label>
            <input type='text' 
            placeholder='Your Email'
            name='email'
            value={name.email}
            onChange={handledata}
             /><br></br>'
             <label>Your Password</label>
            <input type='text' 
            placeholder='Your Password'
            name='password'
            value={name.password}
            onChange={handledata}
             /><br></br>

             <button type='submit'>Submit</button>

        </div>
           
        </form>
    </>
  )
}

export default Form