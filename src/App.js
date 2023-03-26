import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import firebase from './firebase';
import Login from './components/login';
import Home from "./components/home";
import React from "react";
import { useEffect,useState } from "react";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
