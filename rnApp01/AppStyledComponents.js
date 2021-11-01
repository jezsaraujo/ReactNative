import React from 'react';
import {StyleSheet , Text, View } from 'react-native';
import styled from 'styled-components/native';

//criando um componente texto
const Texto = styled.Text`
color: #F5F5F5;
font-size: 30px;
`;

//criando a constante View
const Pagina = styled.View `
background-color:#0000FF;
`;
function App(){ //classes
    return( 
     <Pagina>
       <Texto>Texto do exemplo</Texto>
       <Texto>Outro Texto</Texto>
     </Pagina>
    );
}


export default App; 