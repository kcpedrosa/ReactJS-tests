import React, {Component} from 'react'
import {Link} from 'react-router-dom';

 
 
class Produto extends Component {
    constructor(props){
        super(props)
        this.state={
            id:''
        }
    }
    componentDidMount(){
        const {id} = this.props.match.params
        //what is the mechanic behind the match.params
        this.setState({id:id})
    }

    render(){
        return(
            <div>
                
                <h2>PRODUTO {this.state.id}</h2>
                <Link to="/sobre"> Aller à Sobre ...</Link>
            </div>
        )
    }
}
 
export default Produto