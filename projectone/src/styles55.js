import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`
export const Head = styled.header`
background-color: cornflowerblue;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
export const Titu = styled.a`
    font-size: 50px;
    color: #FFF;
   
`
export const Bemv = styled.h1`
    font-size: ${props=>`${props.tamanho}px`};
    color: ${props=>`#${props.cor}`};
`

/**
 * .container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
}

.header{
    background-color: cornflowerblue;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.titulo{
    font-size: 50px;
    color: white;
}
 */