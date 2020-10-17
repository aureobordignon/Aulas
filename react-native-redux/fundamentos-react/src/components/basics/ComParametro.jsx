import React from 'react'

// export default function ComParametro(props) {
//     return  (
//         <div>
//             <h2>Titulo</h2>
//             <h3>SubTitulo</h3>
//             <p>{ props.titulo }</p>
//             <p>{ props.subTitulo }</p>
//         </div>
//     )
// }

export default (props) => {
    return (
        <div>
            <h2>Titulo</h2>
            <h3>SubTitulo</h3>
            <p>{props.titulo}</p>
            <p>{props.subTitulo}</p>
        </div>
    )
}

