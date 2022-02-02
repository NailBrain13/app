import React, { Component } from 'react';

class Counter extends Component {
  state = {
    tags: ['tag-1', 'tag-2', 'tag-3'],
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncriment(this.props.counter)}
          className='btn btn-secondary btn-sm m-3'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDicrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Remove Counter
        </button>
        {this.state.tags.length === 0 && <p>Create a new tag</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
