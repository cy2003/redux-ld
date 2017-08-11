import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter2, {a as a2, b} from './components/Counter'
import Sum from './components/Sum'

/* Describe component is a child component of Examples */
class Describe extends Component {
  constructor(props) {
    super(props)

  }
  /* You can pass variables from the parent component to the child's component by using props shown in line 18. */
  render() {
    console.log('Examples.render()');
    return (
      <div>
        <div style={{color:'red'}}>
          Describe: {this.props.desc}</div>
      </div>
    )
  }
}

class Examples extends Component {
  constructor(props) {
    super(props)
    /* this.state object has describe as a property. {describe: 'none'} is passed into the child's component in line 40. The child component has access to its parents varibles via props such as shown in line 18 above */
    this.state = {describe: 'none'}
    this.updateDescribe = this.updateDescribe.bind(this)
  }
  // updateDescribe() updates the describe property of state
  updateDescribe(describe){
    this.setState({describe: describe})
  }
  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        <Describe desc= {this.state.describe}/>
        <Counter2 countDesc={this.updateDescribe}/>
        <Sum sumDesc={this.updateDescribe}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
