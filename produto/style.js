import { StyleSheet, StatusBar } from 'react-native';

const styles =  StyleSheet.create({ 


produtoAbaixoEstoque: {
    backgroundColor: '#F33232',
    flexDirection: 'row',
    height: 50,
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
  backgroundColor: '#9EF116',
  flexDirection: 'row',
  height: 50,
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
produtoInativo: {
  backgroundColor: '#C4BBBB',
  flexDirection: 'row',
  height: 50,
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
  width: '40%',
  fontSize: 18,
  paddingRight: 10,
  marginLeft:10,
},
listaEstoque: {
  width: '35%',
  color: "#FFF",
  fontSize: 18,
},



});

export default styles;