import React from 'react'
import Produtos from '../../data/produto'
import './TabelaProdutos.css'

export default props => {
    const Lista = Produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })

    return (
        <div className='TabelaProdutos'>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {Lista}
                </tbody>
            </table>
        </div>
    )
}