import React, { useCallback, useState } from 'react'
import './App.css'
import List from './components/List';

import Form from './components/Form';



const App = () => {
  console.log("App component");

const [todoData, setTodoData] = useState([]);
const [value, setValue] = useState("");



const handleClick= useCallback((id)=>{
  let newTodoData = todoData.filter((data)=> data.id !== id);
    setTodoData(newTodoData);
},[todoData]);

const handleSubmit=(e)=>{
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title : value,
    completed : false,
  }
 // setTodoData({todoData: [...this.state.todoData, newTodo] });
  //setter에서 이전 state를 가지고 오기 위해서는 인수에 함수를 이용해서 사용할 수 있다
  setTodoData((prev) => [...prev,newTodo]);
  setValue("");
};

const handleAllDelete = ()=>{
  setTodoData([]);
}

  return (
      <div className='flex  justify-center w-screen h-screen bg-blue-50'>
        <div className='w-full p-4 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <Form setValue={setValue} handleSubmit={handleSubmit} value={value}></Form>
          <div className='flex justify-between mb-3'>
            <h1 className='font-bold underline'>할일 목록</h1>
            <button onClick={handleAllDelete}>전체 삭제</button>
          </div>
          <div>
          <List handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}></List>
          </div>
          
        </div>
      </div>
  )
}

export default App

