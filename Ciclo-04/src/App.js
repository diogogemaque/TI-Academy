import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './views/Home';
import {VisualizarCliente} from './views/Cliente/VisualizarCliente';
import {VisualizarServico} from './views/Servico/VisualizarServico';
import {Pedido} from './views/Pedido';
import { Menu } from './estilus/Menu';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path= "/visualizarcliente" component={VisualizarCliente}/>
          <Route path= "/pedido" component={Pedido}/>
          <Route path= "/visualizarservico" component={VisualizarServico}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
