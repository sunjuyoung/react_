import React from 'react'
import { useState } from 'react';


const Lists = React.memo(({
    id,title,completed,todoData,setTodoData,provided,snapshot,handleClick}) => {
  console.log("Lists component");
  const [isEditing, setIsEditing] = useState(false);
  const [eidtTitle, setEidtTitle] = useState(title);
    
    const handleCheckBox=(id)=>{
        let newData =todoData.map((data)=>{
            if(data.id === id){
                data.completed = !data.completed;
            }
            return data;
          });
          setTodoData(newData);
      }

    const handleEdit =(e)=>{
      setEidtTitle(e.target.value);
    }
    const editSubmit = (e) =>{
        e.preventDefault();
        let newData = todoData.map(data=>{
          if(data.id === id){
            data.title = eidtTitle;
          }
          return data;
    })
      setTodoData(newData);
      setIsEditing(false);
    }

      if(isEditing){
        return(
          <div className="flex items-center  w-full my-2 py-2 px-4 bg-gray-100 border rounded justify-between">
           <form onSubmit={editSubmit}>
            <div className='items-center'>
              <input value={eidtTitle} className="w-full px-3 py-2 mr-4 text-gray-500 rounded" onChange={handleEdit}/>
            </div>
            </form>
            <div>
              <button className='float-right border-red-600 text-red-500' 
              onClick={()=>setIsEditing(false)}>취소</button>
              <button className='float-right px-4'  onClick={editSubmit}
              type='submit'>save</button>
            </div>
          </div>
        )
      }else{
        return (
          <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} 
          className={`${snapshot.isDragging ? "bg-gray-300" : "flex items-center  w-full my-2 py-2 px-4 bg-gray-100 border rounded justify-between"} `}>
            <div className='items-center'>
              <input type='checkbox'  defaultChecked={completed} 
              onClick={()=> handleCheckBox(id)} />
            </div>
      
            <span className={completed ? "line-through" : undefined}> {title}</span>
            <div>
            
              <button className='float-right border-red-600 text-red-500' 
              onClick={()=>handleClick(id)}>x</button>
              <button className='float-right px-4' 
              onClick={()=>setIsEditing(true)}>edit</button>
            </div>
          </div>
        )
      }


 
})

export default Lists