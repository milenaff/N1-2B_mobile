import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
    marginTop: '5%',
  },
  cadastro: {
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 50,
  },
  picker: {
    borderWidth: 2,
    borderColor: '#00008B',
    borderRadius: 4,
    height: '10%',
    width: '45%',
    margin: 10,
  },
  scrollView: {

    backgroundColor: 'red',
    height: '20%',
  },
  botao: {
    width: 120,
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
  inputCodigo: {
    width: '20%',
    borderColor: '#FF1493',
    color: '#8B008B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  inputEstoque: {
    width: '20%',
    borderColor: '#FF1493',
    color: '#8B008B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  inputCheck: {
    width: '10%',
    borderColor: '#FF1493',
    color: '#8B008B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  caixaTexto: {
    borderColor: "#00008B",
    borderWidth: 2,
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default styles;