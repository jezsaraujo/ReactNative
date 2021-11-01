import React from "react"; // Importação da biblioteca "React"
import {Image} from 'react-native';
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color:#DDD;
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:150px;
  height:150px;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
`;


const Pagina = styled.View`
  flex:1;

`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Header>
      <Quadrado cor="#845EC2">
      <Image source={{uri: 'https://br.web.img2.acsta.net/r_1280_720/pictures/21/09/30/15/20/4002981.jpg'}} 
          style={{width: 120, height: 120, backgroundColor: '#AAA',borderRadius: '50%'}}
          resizeMode='cover'
          />
      </Quadrado>
      <Quadrado cor="#C197FF">
      <Image source={require('./src/imagens/yumis-cells.jpg')} 
          style={{width: 120, height: 120, backgroundColor: '#AAA',borderRadius: '50%'}}
          resizeMode='cover'
          />
      </Quadrado>
      <Quadrado cor="#00C9A7">
      <Image source={{uri: 'https://64.media.tumblr.com/8f0076d64a3a051ee6f29e55ef07f372/6910850c12151d25-90/s1280x1920/43fe442aa250ba331fee216817136e3cc2202550.png'}} 
          style={{width: 120, height: 120, backgroundColor: '#AAA',borderRadius: '50%'}}
          resizeMode='center'
          
          />
      </Quadrado>
 
      </Header>
    </Pagina>
  );
}

export default App;