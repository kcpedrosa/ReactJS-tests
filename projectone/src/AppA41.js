import React, {Component} from 'react';
import Feed from './components/feed/feed.js'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            feed:[
                {id:1, username:'Sauron', curtidas: 10, comentarios:2},
                {id:2, username:'Melkor', curtidas: 100, comentarios:12},
                {id:3, username:'Carcharoth', curtidas: 30, comentarios:6},
                {id:4, username:'John5', curtidas: 1, comentarios:0},
                {id: 5, username:'Shelob', curtidas: 'some...', comentarios:5}
            ]
        }
    }
    

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username}
                        curtidas={item.curtidas} comentarios={item.comentarios} />
                    )}
                )
                }
            </div>
        )
    }
}


export default App;