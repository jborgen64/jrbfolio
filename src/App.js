import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Contact />
      <About />
    </div>
  );
}

export default App;
