import React from 'react'

const Dados =  (props)=> {
    return(

        <div>
            <p>
            Nome: {props.name} Cargo: {props.duty}
            </p>
        </div>
    )
}

export default Dados;