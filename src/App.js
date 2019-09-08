import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { Componente1 } from './Componente1';
import { Componente2 } from './Componente2';
import { Componente3 } from './Componente3';
import { Componente4 } from './Componente4';
import { Componente5 } from './Componente5';
import { NoMatch } from './NoMatch';
//import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';


class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/componente1" component={Componente1}/>
          <Route path="/componente2" component={Componente2}/>
          <Route path="/componente3" component={Componente3}/>
          <Route path="/componente4" component={Componente4}/>
          <Route path="/componente5" component={Componente5}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      <Footer></Footer>
    </React.Fragment>
    );
  }
}


export default App;
