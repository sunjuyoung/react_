import React, { Component } from 'react'
import './App.css'

export default class App extends Component {


  state = {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed : true
      },
      {
        id: "2",
        title: "공부하기1",
        completed : false
      },
      {
        id: "3",
        title: "공부하기2",
        completed : false
      },
    ],
    value : "",
  }

  btnStyle ={
    color:"#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float: "right"
  }

  getStyle = (completed) =>{
    return {
      padding : "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through"  : "none"
    }
  }

  

  handleClick=(id)=>{
    let newTodoData = this.state.todoData.filter((data)=> data.id !== id);
      this.setState({todoData:newTodoData});
  }
  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({value:e.target.value})
  }
  handleSubmit=(e)=>{
    
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title : this.state.value,
      completed : false,
    }

    this.setState({todoData: [...this.state.todoData, newTodo] });
    this.setState({value:""});
  };

  handleCheckBox=(id)=>{
    let newData =this.state.todoData.map((data)=>{
        if(data.id === id){
            data.completed = !data.completed;
        }
        return data;
      });
      this.setState({todoData:newData});
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
          <input type="text" placeholder='새로 할 일을 입력하세요' name='value' onChange={this.handleChange} 
          style={{ flex: '10',padding:'5px'}}  /> 
          <input type="submit" className='btn' style={{flex : '1'}} value="입력"  />
          </form>
          <div className='title'>
            <h1>할일 목록</h1>

            {this.state.todoData.map((data) => (
                       <div key={data.id} style={this.getStyle(data.completed)} >
                       <input type='checkbox'  defaultChecked={data.completed} 
                       onClick={()=> this.handleCheckBox(data.id)} /> {data.title}
                       <button className='xbutton' style={this.btnStyle} 
                       onClick={()=>this.handleClick(data.id)}>x</button>
                     </div>
            ))}
       

          </div>
        </div>
      </div>
    )
  }
}
