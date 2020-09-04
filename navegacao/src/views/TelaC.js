import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => (
   <TextoCentral corFundo={'blue'}  corTexto={'gray'}>
      Tela C - {props.route.params.numero}
   </TextoCentral>
)