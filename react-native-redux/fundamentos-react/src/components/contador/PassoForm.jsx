import React from 'react'

export default props => {
    return (
        <div>
        <label htmlFor="passoInput">Passo:</label>
        <input type="number"
            value={props.passo}
            placeholder="Informe o Passo"
            onChange={e => props.setPasso(+e.target.value)} />
    </div>
)
}