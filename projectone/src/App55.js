import React, {Component} from 'react'
import { Container, Head, Titu, Bemv } from './styles55'


function App(){
        return(
            <Container>
                <Head>
                    <Titu>Metz  est une commune française</Titu>
                </Head>
                <Bemv cor="FFF" tamanho="20"> . Préfecture de département, 
                    elle fait partie, depuis le 1er janvier 2016, 
                    de la région administrative Grand Est </Bemv>
            </Container>
        )
    }

export default App

/**
 * <div className="container">
                <header className="header">
                    <a className="titulo">Projeto Styled</a>
                </header>
                <h1>Bienvenue dans la 55eme classe</h1>

            </div> */