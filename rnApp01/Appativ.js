import React from 'react'; //importando biblioteca
import styled from 'styled-components/native';

//criando um componente texto
const Quadrado = styled.Text`
background-color: ${props => props.cor};
width: 50px;
height: 50px;
`;
const Quadrado2 = styled.Text`
background-color: ${props => props.cor};
width: 50px;
height: 60px;
`;
 

//criando a constante View
const Pagina = styled.View `
flex-direction:row;
flex-wrap: wrap;
justify-content:flex-start;
align-content:stretch; 
margin: 0;
padding: 0;
`;


//em relação a pagina -> align-items
// em relação a linha -> justify-content
//flex-direction: row(linha), column(coluna)

function App(){ //classes
    return( //exibir na tela
     <Pagina>
      <Quadrado cor = "#845EC2"></Quadrado>
       <Quadrado2 cor= "#D65DB1"></Quadrado2>
      <Quadrado2 cor = "#008E9B"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#0081CF"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#0081CF"></Quadrado2>
      <Quadrado2 cor = "#B39CD0"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#008E9B"></Quadrado2>
      <Quadrado cor = "#0081CF"></Quadrado>
      <Quadrado2 cor = "#845EC2"></Quadrado2>
       <Quadrado2 cor= "#D65DB1"></Quadrado2>
       <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado cor = "#0081CF"></Quadrado>
      <Quadrado2 cor = "#B39CD0"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#008E9B"></Quadrado2>
      <Quadrado cor = "#0081CF"></Quadrado>
      <Quadrado2 cor = "#845EC2"></Quadrado2>
       <Quadrado2 cor= "#D65DB1"></Quadrado2>
       <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado cor = "#0081CF"></Quadrado>
      <Quadrado2 cor = "#B39CD0"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#008E9B"></Quadrado2>
      <Quadrado cor = "#00C9A7"></Quadrado>
      <Quadrado2 cor = "#845EC2"></Quadrado2>
       <Quadrado2 cor= "#D65DB1"></Quadrado2>
       <Quadrado cor = "#00C9A7"></Quadrado>
      <Quadrado cor = "#0081CF"></Quadrado>
      <Quadrado2 cor = "#B39CD0"></Quadrado2>
      <Quadrado cor = "#FF9671"></Quadrado>
      <Quadrado2 cor = "#008E9B"></Quadrado2>
     </Pagina>

    );
}


export default App; 