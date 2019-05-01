import React from 'react';
import './App.css';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Bananas from './Bananas'
import Bread from './Bread'
import PageNotFound from './PageNotFound'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/bananas">BANANAS</Link>
        <Link to="/bread">BREAD</Link>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/bananas" component={Bananas}/>
          <Route path="/bread" component={Bread}/>
          <Route component={PageNotFound}/>
        </Switch>

      </header>
    </div>
  );
}

export default App;
