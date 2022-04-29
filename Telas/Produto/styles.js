import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 50,
  },
  scrollView: {
  
    marginHorizontal: 0,
    width: '100%',
    height: '100%',
  },
  botao: {
    width: 120,
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
  },
  inputNome: {
    width: '45%',
    borderColor: '#FF1493',
    color: '#8B008B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  caixaTexto: {
    borderColor: "#00008B",
    borderWidth: 2,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
 
});

export default styles;