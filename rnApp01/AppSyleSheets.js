import React from 'react';
import {StyleSheet , Text, View } from 'react-native';

function App(){ //classes
    return( 
     <View style= {estilo.pagina}>
      <Text style = {estilo.texto}>world</Text>
      <Text style = {estilo.texto}>broadway </Text>
      <Text style = {[estilo.texto,{fontSize:12}]}>Hamilton</Text> 
     </View>
    );
}

//criando a constante estilo
//que vai receber um objeto StyleSheet / css

const estilo = StyleSheet.create({
    pagina: {
      width:200,
      height: 200,
      backgroundColor: '#00BFFF'
    
},

texto: {
  color: '#ffffff',
  fontSize:23
}

});

export default App; 