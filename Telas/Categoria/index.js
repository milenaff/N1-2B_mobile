import { react } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

function salvar(){

}
export default function Categoria({ navigation }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.inputNome}>
                <Text>Código</Text>
                <TextInput style={styles.caixaTexto} keyboardType = 'numeric'
                // onChangeText={(texto) => setNome(texto)}
                // value={nome} 
                />
            </View>

            <View style={styles.inputNome}>
                <Text>Descrição</Text>
                <TextInput style={styles.caixaTexto}
                // onChangeText={(texto) => setNome(texto)}
                // value={nome} 
                />
            </View>

            <View style={styles.inputNome}>
            <TouchableOpacity style={styles.botao} onPress={() => salvar()}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            </View>

        </View>

    );

}