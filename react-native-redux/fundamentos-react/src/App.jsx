import React from 'react'

import './index.css'
import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro.jsx'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import Contador from './components/contador/Contador'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Contador" color="#62FFB3">
                    <Contador numeroInicial={30}
                        passoInicial={5}/>
                </Card>
                <Card titulo="Repetição - Produtos" color="#FF2EED">
                    <TabelaProdutos />
                </Card>
                <Card titulo="Repetição - Alunos" color="#21BCF5">
                    <ListaAlunos />
                </Card>
                <Card titulo="Componente com Filhos" color="#080">
                    <Familia sobrenome="Bordignon">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="João"></FamiliaMembro>
                        <FamiliaMembro nome="Maria"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="Desafio Aleatório" color="#9D2EFF">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="Desafio Aleatório" color='blue'>
                    <Primeiro />
                </Card>
                <Card titulo="Desafio Aleatório" color="orange">
                    <ComParametro titulo="Segundo Componente"
                        subTitulo="Teste de Subtítulo" />
                </Card>
            </div>
        </div>
    )
}