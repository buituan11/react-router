import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './User.jsx';

function Index() {
  return (
      <Link to="/users/">Ấn vào link chuyển sang trang User</Link>
  );
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/"  component={About} />
        <Route path="/users/"  component={Users} />
      </div>
    </Router>
  );
}

export default App;