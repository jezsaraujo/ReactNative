import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

// criando um componente de texto

const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:10px;
  height:10px;
`;
const Quadrado2 = styled.View`
  background-color:${props => props.cor};
  width:10px;
  height:10px;
`;

const Pagina = styled.View`
  flex:1;
  flex-direction:column; 
  justify-content: center;
  align-items: flex-end;
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
      <Quadrado2 cor="#d65db1"></Quadrado2>
      <Quadrado2 cor="#ff6f91"></Quadrado2>
      <Quadrado2 cor="#ff9671"></Quadrado2>
      <Quadrado2 cor="#ffc75f"></Quadrado2>
    </Pagina>
  );
}

export default App;