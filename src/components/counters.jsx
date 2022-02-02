import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset all counters
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncriment={this.props.onIncriment}
            onDicrement={this.props.onDicrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
