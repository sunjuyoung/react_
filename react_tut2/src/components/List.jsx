import React from 'react'

const List = ({todoData,setTodoData}) => {




      const handleCheckBox=(id)=>{
        let newData =todoData.map((data)=>{
            if(data.id === id){
                data.completed = !data.completed;
            }
            return data;
          });
          setTodoData(newData);
      }

    const handleClick=(id)=>{
        let newTodoData = todoData.filter((data)=> data.id !== id);
          setTodoData(newTodoData);
      }
    
      
  return (
    <div>
         {todoData.map((data) => (
                       <div key={data.id} >
                        <div className='flex items-center justify-center w-full px-4 bg-gray-400 border rounded'>
                         <div>
                          <input type='checkbox'  defaultChecked={data.completed} 
                          onClick={()=> handleCheckBox(data.id)} />
                          </div>

                          <span className={data.completed ? "line-through" : undefined}> {data.title}</span>
                          <div>
                          <button className='xbutton' 
                          onClick={()=>handleClick(data.id)}>x</button>
                          </div>
                       </div>
                     </div>
            ))}
    </div>
  )
}

export default List