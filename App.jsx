import './App.css';
import React from 'react';
import Primeiro from "./components/Primeiro"
import ComParametro from "./components/ComParamentro"
import ComFilhos from "./components/ComFilhos"
import Card from './layout/Card';
//import Mega from './Mega/Mega';

export default (props) => {
  <div className='App'>
 <div> 
      <Card titulo= "Componente Com Paramentro">  
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>        
      </Card>
      <Card titulo= "Componente Com Filhos">  
      <ComFilhos>
      <ul>
        <li>Jasper</li>
        <li>Ametista</li>
        <li>Adora</li>
        <li>She-ra</li>
      </ul>
    </ComFilhos>        
      </Card>

      <Card titulo= "Primeiro Componente">
        <Primeiro/>
      </Card>

      <Card titulo= "Exercício">
        Conteudo
      </Card>
</div>
</div>
}
