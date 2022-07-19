import React from 'react'

const Lists = React.memo(({
    id,title,completed,todoData,setTodoData,provided,snapshot,handleClick}) => {
  console.log("Lists component");
    
    const handleCheckBox=(id)=>{
        let newData =todoData.map((data)=>{
            if(data.id === id){
                data.completed = !data.completed;
            }
            return data;
          });
          setTodoData(newData);
      }



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
      </div>
    </div>
  )
})

export default Lists