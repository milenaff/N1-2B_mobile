import { react } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './styles';
import React, { useState, useEffect } from 'react';

export default function Produto({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
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
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >

    );

}