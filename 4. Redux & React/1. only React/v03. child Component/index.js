import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Counter extends Component{
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
class Sum extends Component{
  constructor(props) {
    super(props)
    this.state = {sum: 3, a:1, b: 2}
  }
  render() {
    console.log('Sum.render()');
    return (
      <div>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/>
        + <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button onClick={() => this.setState({sum: Number(this.state.a) + Number(this.state.b)})}>Sum</button>
        <p/>
      </div>
    )
  }
}

/* <Counter/> and <Sum/> are components that are the children of Examples
component. Child component always start with an uppercase letter. */
class Examples extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        <Counter/>
        <Sum/>
      </div>
    )
  }
}
/* When you re-render the parent component <Examples/> all the child
components get re-rendered too. But a child component can get re-rendered
without re-rendering the parent component. */
ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
