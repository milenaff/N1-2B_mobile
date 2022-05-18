import { react } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import styles from './styles';
import React, { useState, useEffect, useRef } from 'react';
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';
import api from '../../services/api';



export default function Categoria({ navigation }) {
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [categorias, setCategorias] = useState([]);
  const [carregaLista, setCarregaLista] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    getCategorias();
  }, [carregaLista])

  async function getCategorias() {
    let resposta = await api.get('/categoria/');
    setCategorias(resposta.data);
  }

  function limpaCampos() {

    setCodigo("");
    setDescricao("");
    setId(undefined);
    Keyboard.dismiss();
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

    return true;
  }

  async function salvar() {
    if (!validaCampos()) {
      return;
    }

    const categoria = {
      codigo,
      descricao
    }

    let identificador = id;

    if (identificador == undefined) {
      //Salvando Categoria
      await api
        .post('/categoria/', categoria)
        .then(() => Alert.alert('Categoria salva com sucesso!'))
        .catch(error => console.log(error));

    } else {
      await api
        .put('/categoria/' + identificador, categoria)
        .then(() => Alert.alert('Categoria alterada com sucesso!'))
        .catch(error => console.log(error));

    }



    setCarregaLista(!carregaLista);
    limpaCampos();


  }

  async function deletaCategoria(identificador) {
    await api.delete('/categoria/' + identificador)
      .then(() => { Alert.alert("Categoria excluída com sucesso!") })
      .catch(() => { Alert.alert("Erro durante a exclusão da categoria") })

    setCarregaLista(!carregaLista);
  }

  function removerElemento(identificador) {
    Alert.alert('Atenção', 'Confirma a remoção da Categoria?',
      [
        {
          text: 'Sim',
          onPress: () => deletaCategoria(identificador),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]);
  }

  function editar(identificador) {
    const categoria = categorias.find(categoria => categoria._id == identificador);

    if (categoria != undefined) {
      setId(categoria._id);
      setDescricao(categoria.descricao);
      setCodigo(categoria.codigo.toString());
    }



  }

  return (


    <View style={styles.container}>
      <View style={styles.input}>
        <View style={styles.inputNome}>
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

        <View style={styles.cadastro}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => salvar()}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.infos} >
        <ScrollView style={styles.scrollView}>
          {
            categorias.map((categoria, index) => (
              <View style={styles.contato} key={index.toString()}>
                <Text style={styles.listaCodigo}>{categoria.codigo}</Text>
                <Text style={styles.listaDescricao}>{categoria.descricao}</Text>

                <View style={styles.dadosBotoesAcao}>
                  <TouchableOpacity onPress={() => removerElemento(categoria._id)}>
                    <EvilIcons name="trash" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => editar(categoria._id)}>
                    <Entypo name="edit" size={32} color="black" />
                  </TouchableOpacity>

                </View>
              </View>

            ))
          }
        </ScrollView>
      </View>
    </View>



  );

}