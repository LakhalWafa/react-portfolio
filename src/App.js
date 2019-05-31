import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './sass/app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/work/" component={Work} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
