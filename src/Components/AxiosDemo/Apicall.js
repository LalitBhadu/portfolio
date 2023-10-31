import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Apicall() {
    const[userData, setUserData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setTimeout(()=>{
                console.log(response)
            setUserData(response.data)
            setLoading(false);
            },1000)
        })
        .catch((error)=>{
            setError(error);
            setLoading(false)
            console.log(error)

        })
    },[])

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


  return (
    <>
    <h1>Apicall Axios call</h1>
    {userData.map((data)=>{
        return(
            <div key={data.id}>
        <h1>{data.name}</h1>
        <h6>{data.username}</h6>
        <h6>{data.email}</h6>

        </div>
        )
    })}

    </>
  )
}

export default Apicall