import { react } from 'react';
import { Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import styles from './styles';
import React, { useState, useEffect, useRef } from 'react';



export default function Categoria({ navigation }) {
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();

    function validaCampos() {

        if (codigo == undefined || codigo.length == 0) {
          Alert.alert('Informe o código.');
          return false;
        }
        if (descricao == undefined || descricao.length == 0) {
          Alert.alert('Informe a descrição.');
          return false;
        }

        return true;
      }    
      function salvar(){
        if (!validaCampos()) {
            return;
          }
          console.log("Salvou")
    }
    
    return (
        <View style={styles.container}>

        
            <View style={styles.inputNome}>
                <Text>Código</Text>
                <TextInput style={styles.caixaTexto} keyboardType = 'numeric'
                onChangeText={(texto) => setCodigo(texto)}
                value={codigo} 
                />
            </View>

            <View style={styles.inputNome}>
                <Text>Descrição</Text>
                <TextInput style={styles.caixaTexto}
                onChangeText={(texto) => setDescricao(texto)}
                value={descricao} 
                />
            </View>
         
           <View style={styles.cadastro}>
           <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => salvar()}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
           </View>         
            

        </View>

    );

}