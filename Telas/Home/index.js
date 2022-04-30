import { ReactComponentElement, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';


export default function Home({ navigation }) {

  function removerElemento(){

  }

  function editar(){

  }

  return (

        <View style={styles.container}>

            <View style={styles.titulo}>
                <Text>Sistema de Logística</Text>
            </View>


            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Categoria')}>
                <Text style={styles.textoBotao}>+ Categoria</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Produto')}>
                <Text style={styles.textoBotao}>+ Produto</Text>
            </TouchableOpacity>



        </View>



    );

}