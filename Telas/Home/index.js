import { react } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function Home({ navigation }) {
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