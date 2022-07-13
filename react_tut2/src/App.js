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
    ]
  }

  btnStyle ={
    color:"#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float: "right"
  }

  getStyle = () =>{
    return {
      padding : "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }



  handleClick=(id)=>{
    let newTodoData = this.state.todoData.filter((data)=> data.id !== id);
      this.setState({todoData:newTodoData});
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <input type="text" placeholder='새로 할 일을 입력하세요'></input> 
          <button>입력</button>
          <div className='title'>
            <h1>할일 목록</h1>

            {this.state.todoData.map((data) => (
                       <div key={data.id} style={this.getStyle()}>
                       <input type='checkbox'  defaultChecked={data.completed}/> {data.title}
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
