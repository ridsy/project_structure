
import React  from 'react';  // corrspnd to react folder in node_modules
class TodoList extends React.Component{
    
    constructor(props){
        super(props);
        console.log("TodoList constructor");
        // this.state = {todos:this.props.todo1};
        // console.log(this.state.todos);
         console.log(this.props.mytodos);
    }

    
    render(){

        return <div>
                   <ul>
                    {
                        this.props.mytodos.map((t,index)=>{
                            return<li>{t.text}</li>
                                  
                        })
                    }
                    </ul>
              </div>
    }
}

export default TodoList;