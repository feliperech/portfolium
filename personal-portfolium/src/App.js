import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePT from './pages/PT-BR/HomePT';
import AboutPT from './pages/PT-BR/AboutPT';
import ContactPT from './pages/PT-BR/ContactPT'
import Portfolio from './pages/PT-BR/Portfolio';
import KnowlegesPT from './pages/PT-BR/KnowledgePT';

function App() {
  return (
    <div >
      <Switch>
        <Route 
          exact
          path={'/'}
          component={HomePT}
        />
        <Route
          exact
          path={'/about-PT'}
          component={AboutPT}
        />
        <Route
          exact
          path={'/contact-PT'}
          component={ContactPT }
        />
        <Route
          exact
          path={'/portfolio-PT'}
          component={Portfolio}
        />
         <Route
          exact
          path={'/knowledge-PT'}
          component={KnowlegesPT}
        />
      </Switch>
    </div>
  );
}

export default App;
