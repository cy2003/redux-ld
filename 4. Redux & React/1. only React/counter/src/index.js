import React, {Component} from 'react'
import ReactDOM from 'react-dom'

/* func02() is declared in the render function. Thus, we can use it without using 'this' keyword */
class Examples extends Component {
  func01(){
    console.log("Hello from func01")
    return "function 01"
  }
  render() {
    const func02 = function(){
      console.log("Hello from func02")
      return "function in render()"
    }
    return (
      <div>
        <div>Simple React</div>
        <div style={{color:"red"}}>Hello World!</div>
        <div> {1+1} </div>
        <div> {this.func01()} </div>
        <div> {func02()} </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)

//class Examples is a special type of function (see line 37)
class Examples extends Component {
  render() {
    return (
      <div>Simple React</div>
    )
  }
}

//Can also be written like this
Examples.prototype.render = function(){
  return (
    <div>Simple React</div>
  )
}
