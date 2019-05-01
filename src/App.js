import React from 'react';
import './App.css';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import Bananas from './Bananas'
import Bread from './Bread'
import PageNotFound from './PageNotFound'
import ShowBanana from './ShowBanana'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/bananas">BANANAS</Link>
        <Link to="/bread">BREAD</Link>
        <Link to="/NOTHING">NOTHING</Link>


        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/bananas" component={Bananas}/>
          <Route path="/bread" component={Bread}/>
          <Route component={PageNotFound}/>

        </Switch>
          <Route path="/bananas/:banana" component={ShowBanana}/>

      </header>
    </div>
  );
}

export default App;
