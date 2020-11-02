import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from './../../firebase'
import './new.css'

class New extends Component{
    constructor(props){
        super(props)
        this.state={
            imagem:'',
            descricao:'',
            titulo:'',
            alert:''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    componentDidMount(){
        if(!firebase.getCurrent()){//if theres no current user logged, redirc to '/'
            this.props.history.replace('/')
            return null
        }
    }

    cadastrar = async(e) => {
        e.preventDefault()
        if(this.state.titulo !== '' && this.state.imagem !== '' & this.state.descricao !== ''){
            let posts = firebase.app.ref('posts') //to minimalize things
            let chave = posts.push().key
            await posts.child(chave).set({
                titulo:this.state.titulo,
                imagem:this.state.imagem,
                descricao:this.state.descricao,
                autor:localStorage.nome
            })
            this.props.history.push('/dashboard')
        } else{
            this.setState({alert:'Fill all the fields...'})
        }
    }

    render(){
        return(
            <div id='jumboteste'>
                <header id='new'>
                    <Link to='/dashboard'> Back to Dashboard </Link>
                </header>
                <form onSubmit={this.cadastrar} id='new-post'>
                    <span>{this.state.alert}</span>
                    <label>Title:</label>
                    <input type='text' placeholder='Post name...' 
                    value={this.state.titulo} autoFocus
                    onChange={(e)=>{this.setState({titulo: e.target.value})}}/>
                    <br/>
                    <label>Image URL:</label>
                    <input type='text' placeholder='Image URL ...'
                    value={this.state.imagem}
                    onChange={(e)=>{this.setState({imagem: e.target.value})}}
                    />
                    <br/>
                    <label>Description:</label>
                    <textarea type='text' placeholder='Post description ...'
                     value={this.state.descricao}
                    onChange={(e)=>{this.setState({descricao: e.target.value})}}/>
                    <br/>
                    <button type='submit'> Save data </button>
                </form>
            </div>
        )
    }
}

export default withRouter(New)