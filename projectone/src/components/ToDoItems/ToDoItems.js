import React, {Component} from 'react'

class ToDoItems extends Component{
    constructor(props){
        super(props)
        this.state = {}
    this.erase = this.delete.bind(this)
    }

    delete(key){
        this.props.delete(key)
        
    }
    


    render(){
        return(
            <div>
                {this.props.lista.map((items)=>{
                    return(
                    <div key={items.key}>
                    <ul >
                        <li >
                            {items.text} 
                            <button  className="btn btn-danger btn-sm" onClick={() => this.erase(items.key)}> DELETE </button>
                        </li>
                       
                    </ul>
                    </div>
                    )
                })
                }
            </div>
        )
    }
}


export default ToDoItems