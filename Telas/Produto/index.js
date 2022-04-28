import { react } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import React, { useState, useEffect } from 'react';

export default function Produto({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.inputNome}>
                <Text>Código</Text>
                <TextInput style={styles.caixaTexto} keyboardType='numeric'
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
                <Text>Categoria</Text>
                <TextInput style={styles.caixaTexto} keyboardType='numeric'
                // onChangeText={(texto) => setNome(texto)}
                // value={nome} 
                />
            </View>

            <View style={styles.inputNome}>
                <Text>Quantidade em estoque</Text>
                <TextInput style={styles.caixaTexto} keyboardType='numeric'
                // onChangeText={(texto) => setNome(texto)}
                // value={nome} 
                />
            </View>
            <View style={styles.inputNome}>
                <Text>Estoque mínimo</Text>
                <TextInput style={styles.caixaTexto} keyboardType='numeric'
                // onChangeText={(texto) => setNome(texto)}
                // value={nome} 
                />
            </View>

            <View style={styles.inputNome}>
                <Text>Ativo</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
            </View>
        </View>

    );

}