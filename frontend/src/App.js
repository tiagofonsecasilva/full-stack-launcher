import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* This is an example to show users list */}
      <Switch>
        <Route exact path="/users/" component={UserList} />
      </Switch>
      {/* This is an example to show users list */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
