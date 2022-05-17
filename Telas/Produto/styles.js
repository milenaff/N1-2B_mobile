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

    backgroundColor: '#F9F5F5',
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
  contato: {
    backgroundColor: '#20B2B2',
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
}
});

export default styles;