// Need to import Component from the react library
import React, { Component } from 'react'
/* You can only export one default component to the index.js file */
export default class Counter extends Component{
  constructor(props) {
    super(props)
    this.state = {count: 0}
    this.decrease = this.decrease.bind(this);
  }
  decrease() {
    this.setState({count: this.state.count - 1});
  }
  render() {
    console.log('Counter.render()');
    return (
      <div>
        Clicked: <span>{this.state.count}</span> times
        <button onClick={this.decrease}>Decrease</button>
        <p/>
      </div>
    )
  }
}

/* Because you already exported one default component in line 4, if you want to export more data, you can just use export */
export const a = 'A';
export const b = {b:'B'};
/* var and let can also be used instead of const */
