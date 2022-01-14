import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
//import Primeiro from "./components/Primeiro";
//import Comparametro from "./components/ComParamentro";
//import ComFilhos from "./components/ComFilhos";
import Card from "./layout/Card.css";

ReactDOM.render(
  <div>
      <Card titulo= "Exercício">Conteudo</Card>
    {/*<ComFilhos>
      <ul>
        <li>Jasper</li>
        <li>Ametista</li>
        <li>Adora</li>
        <li>She-ra</li>
      </ul>
    </ComFilhos>*/}

    {/* <Primeiro/>
    <Comparametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>*/}
  </div>,
  document.getElementById("root")
);
