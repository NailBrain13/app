import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId,
    );
    this.setState({ counters: counters });
  };
}

export default Counters;
