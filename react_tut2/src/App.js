import React, { useState } from 'react'
import './App.css'




const App = () => {

const [todoData, setTodoData] = useState([]);
const [value, setValue] = useState("");


const btnStyle ={
  color:"#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor:"pointer",
  float: "right"
}

const getStyle = (completed) =>{
  return {
    padding : "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through"  : "none"
  }
}



const handleClick=(id)=>{
  let newTodoData = todoData.filter((data)=> data.id !== id);
    setTodoData(newTodoData);
}
const handleChange=(e)=>{
  setValue(e.target.value);
}
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
    <div>
      <div className='container'>
        <div className='todoBlock'>
          <form style={{display:'flex'}} onSubmit={handleSubmit}>
          <input type="text" placeholder='새로 할 일을 입력하세요' name='value' onChange={handleChange} 
          style={{ flex: '10',padding:'5px'}}  /> 
          <input type="submit" className='btn' style={{flex : '1'}} value="입력"  />
          </form>
          <div className='title'>
            <h1>할일 목록</h1>

            {todoData.map((data) => (
                       <div key={data.id} style={getStyle(data.completed)} >
                       <input type='checkbox'  defaultChecked={data.completed} 
                       onClick={()=> handleCheckBox(data.id)} /> {data.title}
                       <button className='xbutton' style={btnStyle} 
                       onClick={()=>handleClick(data.id)}>x</button>
                     </div>
            ))}
       
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

