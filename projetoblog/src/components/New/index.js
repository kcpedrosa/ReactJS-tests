import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import firebase from './../../firebase'
import './new.css'

class New extends Component{
    constructor(props){
        super(props)
        this.state={
            imagem: null,
            url:'',
            descricao:'',
            titulo:'',
            alert:'',
            progress:0,
        }
        this.cadastrar = this.cadastrar.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    componentDidMount(){
        if(!firebase.getCurrent()){//if theres no current user logged, redirc to '/'
            this.props.history.replace('/')
            return null
        }
    }

    cadastrar = async(e) => {
        e.preventDefault()
        if(this.state.titulo !== '' && this.state.imagem !== '' 
        && this.state.descricao !== ''
        && this.state.imagem !== null
        && this.state.url !== ''){
            let posts = firebase.app.ref('posts') //to minimalize things
            let chave = posts.push().key
            await posts.child(chave).set({
                titulo:this.state.titulo,
                imagem:this.state.url,
                descricao:this.state.descricao,
                autor:localStorage.nome
            })
            this.props.history.push('/dashboard')
        } else{
            this.setState({alert:'Fill all the fields...'})
        }
    }

    handleFile = async(e) =>{
        if(e.target.files[0]){
            const image = e.target.files[0]
            if(image.type === 'image/png' || image.type === 'image/jpeg'){
                //console.log(image)
                await this.setState({imagem:image})
                this.handleUpload()
            }else{
                alert('Upload files of the following types: PNG or JPEG')
                this.setState({imagem:null})
                return null
            }
        }
    }

    handleUpload = async() =>{
        const {imagem} = this.state
        const currentUid = firebase.getCurrentUid()

        const uploadTasks = firebase.storage
        .ref(`images/${currentUid}/${imagem.name}`)
        .put(imagem)

        await uploadTasks.on('state_changed',
        (snapshot)=>{
            //progress
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            this.setState({progress:progress})//because they have the same name you could
            //set only progress once

        },
        (error)=>{
            //error
            console.log('Error/image' + error)
        },
        ()=>{
            //sucesso
            firebase.storage.ref(`images/${currentUid}`)
            .child(imagem.name).getDownloadURL()
            .then(url=>{
                this.setState({url:url})
            })
        })
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

                    <label>Image file:</label>
                    <input type='file' 
                    onChange={this.handleFile} //find a way to change the default text for the input
                    />
                    <br/>
                    {this.state.url !== '' ?
                    <img src={this.state.url} width='250' height='150' alt='Capa do post' />
                    :
                    <progress value={this.state.progress} max='100'/>
                    }

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