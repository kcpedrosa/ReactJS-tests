import React, {Component} from 'react'
import ToDoItems from '../ToDoItems/ToDoItems'

class ToDoList extends Component{
    constructor(props){
        super(props)
        this._tarefaInput = null
        this.state={
            tarefa:'',
            items:[]
        }
        this.add = this.addItem.bind(this)
        this.erase = this.deleteItem.bind(this) 
        this.log = this.log.bind(this)
    }

    addItem(e){
        let state = this.state
        if(this._tarefaInput.value !== ''){
            console.log(this._tarefaInput.value)
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }
            this.setState({items:[...state.items, newItem]})
        }
        

        e.preventDefault()
        this.setState({tarefa: ''})
    }

    deleteItem(key){
        console.log('delete == ' + key)
        let filtro = this.state.items.filter((element)=>{
            return(element.key !== key)
        })
        console.log(filtro)
        this.setState({items:filtro})

    }


    log(){
        console.log(this.state.items)
        //devolverá um array como log
    }

    render(){
        return(
            <div>
                <form onSubmit={this.add}>
                    <input type='text' 
                    placeholder='New Task' 
                    name='tarefa'
                    value={this.state.tarefa} 

                    onChange={(event) => this.setState({tarefa : event.target.value})}
                    
                    ref={(ev)=> this._tarefaInput = ev}/>

                    <br></br>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-md">
                    Add
                    </button>
                </form>
                
                <br></br>
                <button onClick={this.log} className="btn btn-success btn-md"> LOG </button>

                <ToDoItems lista={this.state.items} delete={this.erase}/>
            </div>
        )
    }
}

export default ToDoList