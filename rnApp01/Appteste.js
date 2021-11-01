import React from 'react';
import {StyleSheet , Text, View } from 'react-native';
import styled from 'styled-components/native';

//criando um componente texto
const Quadrado = styled.Text`
background-color: ${props => props.cor};
flex:1;
height: 50px;
//widht: 50px;
//height: 50px;
`;

//criando a constante View
const Pagina = styled.View `
flex:1;
flex-directon: row-reverse;
`;
function App(){ //classes
    return( 
     <Pagina>
       <Quadrado cor = "red"></Quadrado>
       <Quadrado cor= "green"></Quadrado>
      <Quadrado cor = "blue"></Quadrado>
     </Pagina>
    );
}


export default App; 