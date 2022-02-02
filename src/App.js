import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      //Use React.Fragment
      <>
        <Navbar />
        <main className='container'>
          <Counters />
        </main>
      </>
    );
  }
}

export default App;
