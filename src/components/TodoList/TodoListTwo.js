// import React, { Component } from "react";

// class TodoListTwo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         taskText: ''
//     };
//   }
// changeHandler = ({target:{value,name}})=>{
//     this.setState({
//         [name]: value
//     })
// }
// submitHandler = (event) => {
//     const {props:{sendData},state:{taskText}} = this
//     event.preventDefaulf()
//     sendData(taskText)
// }
//   render() {
//     const{taskText} = thid.state;
//     return (
//       <form onSubmit={this.submitHandler}>
//         <input type='text' value = {taskText} name='taskText' onChange={this.changeHandler}/>{
//             <button type='submit'>Add task</button>
//         }
//       </form>
//     );
//   }
// }

// export default TodoListTwo;
