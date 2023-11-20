import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState(" ")
    const [listData, setListData] = useState([])



    function handleAdd(){
       
        setListData((listData)=>{
            const updatedList =[...listData,todo];
            console.log(updatedList );
            setTodo(' ');
            return updatedList;
        })
        
    }

    function removehandle(id) {
        const updatedListData = listData.filter((ele, index) => id !== index);
        setListData(updatedListData);
      }

    function removeAll(){
        setListData([]);
    }

  return (
   <>
    <div className='conatiner'>
        <h3>Todo List</h3>
        <input type='text' placeholder='Add Your Activity' value={todo} onChange={(e)=>setTodo(e.target.value)}  style={{width:"300px"}}/>
        <button onClick={handleAdd} style={{height:"40px", width:"60px"}}>Add</button>
        <div>
            <h5>List data</h5>
            {listData.length > 0 && listData.map((data,id)=>{
               
                return(
                    <>
                    
                        <div key={id}>{data}</div>
                        <button onClick={()=>removehandle(id)}>remove</button>
                    </>
                )
            })}
            
        </div>
        {listData.length>=1 && <button onClick={removeAll}>clear all</button>} 
        
    </div>
   </>
  )
}

export default Todo