
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.component'
import {Link} from 'react-router'


class AddTodo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todoList:this.props.mytodos,
            input:''
        }
    }

    // addItemHandler(){
    //     let theInputValue = ReactDOM.findDOMNode(this.refs.txtValueFromUser);
    //         this.setState({todoList:this.state.todoList.concat(theInputValue.value)});
    // }

    handleChange(e) {
        this.setState({ input: e.target.value });
      }


    render(){

        // console.log(this.state.todoList);
        // var todoToBeCreated = this.state.todoList.map((todo,index)=>{
        //     return <TodoList todo1={todo} key={index * Math.random()} />
        // });
        
        return <div> 
            <form>
                  Enter :<input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} />
                  <button type="button" className="btn btn-success" onClick={this.props.addtodo.bind(null,this.state.input)}>AddTodo</button>
                    </form>
                    <br/>
                    <hr/>
                    <Link to={`/todos`}>
                    Showtodo
                     </Link>
            </div>
    }
}

export default AddTodo;