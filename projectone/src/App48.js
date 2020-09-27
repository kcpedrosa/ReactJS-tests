import React, {Component} from 'react';
import ToDoList from './components/ToDoList/ToDoList.js'




class App extends Component {
    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div className="container">
                <div className="jumbotron m-5"  >
                    <h1>To-Do List</h1>
                    <ToDoList/>
                </div>
                
               
            </div>

        )
    }

}

export default App;