import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import NotFoundPage from './404';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Router> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Game">Game</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Game" element={<Game />}/>
      <Route
          path="*"
          element={<NotFoundPage />}>
        </Route>
      </Routes>
    </Router>
    </div> 
  );
};
export default App;

function Home(){
  return(
    <div>
    <p>Hello HH</p>
  </div>
  );
}