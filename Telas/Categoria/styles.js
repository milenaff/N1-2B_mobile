import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
  }, 
  cadastro: {
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 50,
  },
  botao: {
    width: 120,
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
},
  caixaTexto: {
    borderColor: "#00008B",
    borderWidth: 2,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputNome: {
    width: '45%',
    borderColor:'#FF1493',
    color:'#8B008B',  
    alignItems: 'center',
    justifyContent: 'center', 
    margin:10,     
},
});

export default styles;