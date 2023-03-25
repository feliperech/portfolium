import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePT from './pages/PT-BR/HomePT';
import AboutPT from './pages/PT-BR/About/AboutPT';
import Contact from './pages/PT-BR/Contact/Contact'
import Portfolio from './pages/PT-BR/Portfolio';
import KnowlegesPT from './pages/PT-BR/KnowledgePT/KnowledgePT';
import './App.css'

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
          path={'/home'}
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
          component={Contact }
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
