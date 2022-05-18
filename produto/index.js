import {
    Text, TouchableOpacity, View, Alert
} from 'react-native';

import styles from './style';
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';


function exibirEstoque(produto, estoque) {
    Alert.alert('O estoque do ' + produto + ' é ' + estoque);
}
export default function ProdutoList({ produto, remover, editar, index }) {

    return (
        <View style={[
            produto.ativo && styles.produtoAtivo,
            !produto.ativo && styles.produtoInativo,
            produto.quantidadeEstoque <= produto.estoqueMinimo && styles.produtoAbaixoEstoque]}
        >


            <TouchableOpacity onPress={() => exibirEstoque(produto.descricao, produto.quantidadeEstoque)}>
                <View style={styles.dados}>
                    <Text style={styles.texto}>Cód: </Text>
                    <Text style={styles.listaCodigo}>{produto.codigo}</Text>
                    <Text style={styles.listaDescricao}>{produto.descricao}</Text>
                </View>
            </TouchableOpacity>



            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => remover(produto._id)}>
                    <EvilIcons name="trash" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => editar(produto._id)}>
                    <Entypo name="edit" size={25} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );

};



