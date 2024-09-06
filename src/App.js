import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Home from './pages/Home';
import CustomersList from './pages/customers/List';
import CustomersRegister from './pages/CustomersRegister'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={CustomersList} />
          </Route>
          <Route path="/customers/add">
            <TemplatePage title="Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/">
            <TemplatePage title="Pagina Inicial" Component={Home}></TemplatePage>
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;