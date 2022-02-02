import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDicrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId,
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((curentValue) => {
      curentValue.value = 0;
      return curentValue;
    });
    this.setState({ counters });
  };

  render() {
    return (
      //Use React.Fragment
      <>
        <Navbar
          totalCounters={
            this.state.counters.filter((item) => item.value > 0).length
          }
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncriment={this.handleIncrement}
            onDicrement={this.handleDicrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
