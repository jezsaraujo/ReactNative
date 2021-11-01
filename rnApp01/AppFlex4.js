import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color:#DDD;
  height:200px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:50px;
  height:50px;
`;

const Quadrado2 = styled.View`
  background-color:${props => props.cor};
  width:100px;
  height:50px;
`;


const Pagina = styled.View`
  flex:1;

`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Header>
      <Quadrado cor="#845EC2"></Quadrado>
      <Quadrado cor="#296073"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ADC5CF"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado2 cor="#d65db1"></Quadrado2>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
      <Quadrado cor="#296073"></Quadrado>
      <Quadrado cor="#3596B5"></Quadrado>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado2 cor="#ffc75f"></Quadrado2>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado cor="#d65db1"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ff9671"></Quadrado>
      <Quadrado cor="#296073"></Quadrado>
      <Quadrado cor="#845EC2"></Quadrado>
      <Quadrado cor="#296073"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ADC5CF"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado2 cor="#d65db1"></Quadrado2>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
      <Quadrado cor="#4B4453"></Quadrado>
      <Quadrado cor="#296073"></Quadrado>
      <Quadrado2 cor="#4B4453"></Quadrado2>
      <Quadrado cor="#ADC5CF"></Quadrado>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado cor="#845ec2"></Quadrado>
      <Quadrado2 cor="#d65db1"></Quadrado2>
      <Quadrado cor="#ff6f91"></Quadrado>
      <Quadrado2 cor="#3596B5"></Quadrado2>
      <Quadrado cor="#ffc75f"></Quadrado>
      <Quadrado2 cor="#845ec2"></Quadrado2>
      </Header>
    </Pagina>
  );
}

export default App;