//onde serão introduzidas as rotas dos links (Route) + o import desse link conforme a pasta raiz (import)
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import {VisualizarServico} from './pages/Servico/VisualizarServico';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido';
import { Menu } from './components/Menu';
import {Servico0} from './pages/Servico/Servico0';
import {Cliente0} from './pages/Cliente/Cliente0';
import { Pedido0 } from './pages/Pedido/Pedido0';
import { CadastrarServico } from './pages/Servico/CadastrarServico';
import { EditarServico } from './pages/Servico/EditarServico';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          {/* adicionar o link /.... e vincular com o export const do index.js da pasta Cadastrar  */}
          <Route exact path="/" component={Home}/> {/*PATH=CAMINHO / COMPONENT= */}
          <Route path= "/visualizarservico" component={VisualizarServico}/>
          <Route path= "/visualizarcliente" component={VisualizarCliente}/>
          <Route path= "/visualizarpedido" component={VisualizarPedido}/>
          <Route path= "/servico0/:id" component={Servico0}/>
          <Route path= "/cliente0/:id" component={Cliente0}/>
          <Route path= "/pedido0/:id" component={Pedido0}/>
          <Route path= "/cadastrarservico" component={CadastrarServico}/>
          <Route path= "/editarservico/:id" component={EditarServico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
