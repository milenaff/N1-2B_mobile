import { react } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './styles';
import React, { useState, useEffect, useRef } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';
import api from '../../services/api';


export default function Produto({ navigation }) {
    const [isChecked, setChecked] = useState(false);

    const [listaCategorias, setListaCategorias] = useState([]);
    const [categoria, setCategoria] = useState();
    const dropdownCategoriasRef = useRef({});
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [estoque, setEstoque] = useState();
    const [estoqueMin, setEstoqueMin] = useState();
    const [id, setId] = useState();
    const [produtos, setProdutos] = useState([]);
    const [carregaLista, setCarregaLista] = useState(false);

    useEffect(() => {
        getCategorias();
        getAllProdutos();
    }, [carregaLista])

    function limpaCampos() {

        setCodigo("");
        setDescricao("");
        setEstoque("");
        setEstoqueMin("");
        setChecked(false);
        dropdownCategoriasRef.current.reset();
        setId(undefined);
        Keyboard.dismiss();
    }

    async function salvar() {
        if (!validaCampos()) {
            return;
        }

        let produto = {
            codigo,
            descricao,
            categoria,
            quantidadeEstoque: estoque,
            estoqueMinimo: estoqueMin,
            ativo: isChecked,
        }

        let identificador = id;

        if (identificador == undefined) {
            //Salvando produto
            await api
                .post('/produto/', produto)
                .then(() => Alert.alert('Produto salvo com sucesso!'))
                .catch(error => console.log(error));

        }else{
            // Alterando Produto
            await api
                .put('/produto/' + identificador,produto)
                .then(() => {Alert.alert('Produto alterado com sucesso!')})
                .catch(error => console.log(error))
        }



        setCarregaLista(!carregaLista);
        limpaCampos();
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

    async function getAllProdutos() {
        let resposta = await api.get('/produto/');
        setProdutos(resposta.data);
    }

    async function getCategorias() {
        let resposta = await api.get('/categoria/');
        setListaCategorias(resposta.data);
    }

    async function deletaProduto(identificador) {
        await api.delete('/produto/' + identificador)
            .then(() => { Alert.alert("Produto excluído com sucesso!") })
            .catch(() => { Alert.alert("Erro durante a exclusão do produto") })

        setCarregaLista(!carregaLista);
    }

    function removerElemento(identificador) {
        Alert.alert('Atenção', 'Confirma a remoção do produto?',
            [
                {
                    text: 'Sim',
                    onPress: () => deletaProduto(identificador),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    function editar(identificador) {
        const produto = produtos.find(produto => produto._id == identificador);

        if (produto != undefined) {
            setId(produto._id);
            setDescricao(produto.descricao);
            //setCategoria(produto.categoria);
            setCodigo(produto.codigo.toString());
            setEstoque(produto.quantidadeEstoque.toString());
            setEstoqueMin(produto.estoqueMinimo.toString());
            setChecked(produto.ativo);

        }


    }

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
                    data={listaCategorias}
                    ref={dropdownCategoriasRef}
                    onSelect={(selectedItem, index) => {
                        setCategoria(selectedItem._id);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.descricao
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.descricao
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
                                <TouchableOpacity onPress={() => removerElemento(produto._id)}>
                                    <EvilIcons name="trash" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => editar(produto._id)}>
                                    <Entypo name="edit" size={32} color="black" />
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