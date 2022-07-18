import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
    
    const handleEnd = (result)=>{
      console.log(result);
      if(!result.destination)return;

      const newTodo = todoData;
      const [reorderData] =newTodo.splice(result.source.index,1);
      newTodo.splice(result.destination.index, 0, reorderData);
      setTodoData(newTodo);

    }
      
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
         {todoData.map((data,index) => (
          <Draggable
            key={data.id}
            draggableId={data.id.toString()}
            index={index}
          >
            {(provided, snapshot)=>(
              <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} 
              className={`${snapshot.isDragging ? "bg-gray-300" : "flex items-center  w-full my-2 py-2 px-4 bg-gray-100 border rounded justify-between"} `}>
                <div className='items-center'>
                  <input type='checkbox'  defaultChecked={data.completed} 
                  onClick={()=> handleCheckBox(data.id)} />
                </div>

                <span className={data.completed ? "line-through" : undefined}> {data.title}</span>
                <div>
                  <button className='float-right border-red-600 text-red-500' 
                  onClick={()=>handleClick(data.id)}>x</button>
                </div>
              </div>
          )}
          </Draggable>
            ))}
            {provided.placeholder}
            </div>
            )}
           </Droppable>
        </DragDropContext>
    </div>
  )
}

export default List