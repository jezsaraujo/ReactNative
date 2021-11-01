import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

// criando um componente de texto

const Quadrado = styled.View`
  background-color:${props => props.cor};
  flex:${props => props.flexivel};
  height:50px;
`;

const Pagina = styled.View`
  flex:1;
  flex-direction:colomn; 
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Quadrado flexivel = {1} cor="orange"></Quadrado>
      <Quadrado flexivel = {2} cor="pink"></Quadrado>
      <Quadrado flexivel = {1} cor="yellow"></Quadrado>
    </Pagina>
  );
}

export default App;