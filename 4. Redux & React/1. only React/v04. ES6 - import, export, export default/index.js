import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/* You can import the default and other components from one file if you put commas inbetween. You can also change the name of the variable a to a2 as shown below. */
import Counter, {a as a2, b} from './components/Counter'
import Sum from './components/Sum'

console.log(a2);
console.log(b);

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

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
