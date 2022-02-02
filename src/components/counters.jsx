import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncriment, onDicrement } =
      this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset all counters
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncriment={onIncriment}
            onDicrement={onDicrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
