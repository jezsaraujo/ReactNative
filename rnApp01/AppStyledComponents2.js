import React from 'react';
import {StyleSheet , Text, View } from 'react-native';
import styled from 'styled-components/native';

//criando um componente texto
const Texto = styled.Text`
color: ${props => props.cor};
font-size: 30px;
background-color: green;
`;

//criando a constante View
const Pagina = styled.View `
flex:1;
background-color: #0000FF;
`;
function App(){ //classes
    return( 
     <Pagina>
       <Texto cor = "red"> Texto de exemplo!</Texto>
       <Texto cor= "purple"> Outro Texto!</Texto>
     </Pagina>
    );
}


export default App; 