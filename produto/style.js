import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({


  dadosBotoesAcao: {
    width: '15%',
    flexDirection: 'row',
  },
  produtoAbaixoEstoque: {
    backgroundColor: '#F33232',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  produtoAtivo: {
    backgroundColor: '#90EE90',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    margin: 5,
    width:'97%',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  produtoInativo: {
    backgroundColor: '#C4BBBB',
    flexDirection: 'row',
    height: 40,
    width:'97%',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  listaDescricao: {
    width: '60%',
    fontSize: 18,
    paddingRight: 5,
    marginLeft: 5,
  },

  dados:{
    width: '90%',
    flexDirection: 'row',
  },
  texto: {
   color: "#000",
    fontSize: 18,
    paddingLeft:5
  },
  listaCodigo: {
    width: '10%',
    fontSize: 18,
  
    },



});

export default styles;