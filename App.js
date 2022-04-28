import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Telas/Home/index';
import Categoria from './Telas/Categoria/index';
import Produto from './Telas/Produto/index';
import estilos from  './styles'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Categoria,
    Produto,
  })
);

export default function App() {
  return (
      <Routes/>      
  );
}

