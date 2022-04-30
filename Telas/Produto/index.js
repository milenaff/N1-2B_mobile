import { react } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './styles';
import React, { useState, useEffect, useRef } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';

export default function Produto({ navigation }) {
    const [isChecked, setChecked] = useState(false);

    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaCategorias2, setListaCategorias2] = useState(["Comida", "Bebida"]);
    const [categoria, setCategoria] = useState();
    const dropdownCategoriasRef = useRef({});
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [estoque, setEstoque] = useState();
    const [estoqueMin, setEstoqueMin] = useState();
    const [id, setId] = useState();
    const [produtos, setProdutos] = useState([]);

    function limpaCampos() {

        setCodigo("");
        setDescricao("");
        setEstoque("");
        setEstoqueMin("");
        dropdownCategoriasRef.current.reset();
        setId(undefined);
        Keyboard.dismiss();
    }

    function salvar() {
        if (!validaCampos()) {
            return;
        }
        console.log("Salvou")
        console.log(codigo);
        console.log(descricao);
        console.log(categoria);
        console.log(estoque);
        console.log(estoqueMin);
        console.log(isChecked);
    }

    function validaCampos() {

        if (codigo == undefined || codigo.length == 0) {
            Alert.alert('Informe o código.');
            return false;
        }
        if (descricao == undefined || descricao.length == 0) {
            Alert.alert('Informe a descrição.');
            return false;
        }
        if (categoria == undefined || categoria.length == 0) {
            Alert.alert('Selecione a categoria.');
            return false;
        }

        if (estoque == undefined || estoque.length == 0) {
            Alert.alert('Informe o estoque.');
            return false;
        }

        if (estoqueMin == undefined || estoqueMin.length == 0) {
            Alert.alert('Informe o estoque mínimo.');
            return false;
        }

        return true;
    }

    // async function carregaCategorias() {
    //     try {
    //       console.log('tentar pegar os tipos')
    //       let categorias = await obtemTodosTipoAtividade();
    //       console.log('Categorias');
    //       console.log(categorias);
    //       setListaCategorias(categorias);
    //     } catch (e) {
    //       Alert.alert(e.toString());
    //     }
    //   }

    return (

        <SafeAreaView style={styles.container} >
            <View style={styles.container}>

                <View style={styles.cadastro}>
                    <View style={styles.inputCodigo}>
                        <Text>Código</Text>
                        <TextInput style={styles.caixaTexto} keyboardType='numeric'
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
                </View>
                <Text>Categoria</Text>
                <SelectDropdown
                    data={listaCategorias2}
                    ref={dropdownCategoriasRef}
                    onSelect={(selectedItem, index) => {
                        setCategoria(selectedItem);
                        // setCategoria(selectedItem.id);
                        console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                        // return selectedItem.descricao
                    }}
                    rowTextForSelection={(item, index) => {

                        return item
                        //return item.descricao
                    }}
                />

                <View style={styles.cadastro}>

                    <View style={styles.inputEstoque}>
                        <Text>Quantidade em estoque</Text>
                        <TextInput style={styles.caixaTexto} keyboardType='numeric'
                            onChangeText={(texto) => setEstoque(texto)}
                            value={estoque}
                        />
                    </View>
                    <View style={styles.inputEstoque}>
                        <Text>Estoque mínimo</Text>
                        <TextInput style={styles.caixaTexto} keyboardType='numeric'
                            onChangeText={(texto) => setEstoqueMin(texto)}
                            value={estoqueMin}
                        />
                    </View>
                    <View style={styles.inputCheck}>
                        <Text >Ativo</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                    </View>
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

            <ScrollView style={styles.scrollView}>
                {
                    produtos.map((produto, index) => (
                        <View style={styles.contato} key={index.toString()}>
                            <Text style={styles.listaCodigo}>{produto.codigo}</Text>
                            <Text style={styles.listaDescricao}>{produto.descricao}</Text>
                            <Text style={styles.listaEstoque}>{produto.estoque}</Text>

                            <View style={styles.dadosBotoesAcao}>
                                <TouchableOpacity onPress={() => removerElemento()}>
                                    <EvilIcons name="trash" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => editar()}>
                                    <Entypo name="edit" size={32} color="#black" />
                                </TouchableOpacity>

                            </View>
                        </View>

                    ))
                }
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView >

    );

}