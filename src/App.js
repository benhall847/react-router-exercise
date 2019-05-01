import React from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom'
import Home from './Home'
import Bananas from './Bananas'
import Bread from './Bread'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to="/bananas">BANANAS</Link>
        <Link to="/bread">BREAD</Link>

        <Route exact path="/" component={Home}/>
        <Route path="/bananas" component={Bananas}/>
        <Route path="/bread" component={Bread}/>
      </header>
    </div>
  );
}

export default App;
