import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Lists from './Lists';

const List = React.memo(({todoData,setTodoData,handleClick}) => {
  console.log("List component");
    
    //dnd 데이터 변경 적용
    const handleEnd = (result)=>{
      console.log(result);
      if(!result.destination)return;

      const newTodo = todoData;
      const [reorderData] = newTodo.splice(result.source.index,1);
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
              <Lists
              handleClick={handleClick}
              key={data.id}
              id={data.id}
              title={data.title}
              completed={data.completed}
              todoData={todoData}
              setTodoData={setTodoData}
              provided={provided}
              snapshot={snapshot}
              />
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
})

export default List