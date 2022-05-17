import {
    Text, TouchableOpacity, View
} from 'react-native';

import styles from './style';
import { Ionicons, Entypo, EvilIcons} from '@expo/vector-icons';



export default function ProdutoList({ produto, remover, editar, index }) {

    return (
        <View style={[
            produto.ativo && styles.produtoAtivo,
            !produto.ativo && styles.produtoInativo,
            produto.quantidadeEstoque <= produto.estoqueMinimo && styles.produtoAbaixoEstoque]}
            >
            <Text style={styles.listaCodigo}>{produto.codigo}</Text>
            <Text style={styles.listaDescricao}>{produto.descricao}</Text>
            <Text style={styles.listaEstoque}>{produto.estoque}</Text>

            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => remover(produto._id)}>
                    <EvilIcons name="trash" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => editar(produto._id)}>
                    <Entypo name="edit" size={32} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );

};