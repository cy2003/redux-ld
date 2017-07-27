import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {

  func01(){
    console.log("hello from func01")
    return "function of class"
  }

  render() {
    const func02 = function(){
      console.log("Hello from func02")
      return "function in render"
    }

    return(
      // This is JSX code. We put JavaScript code in curly braces
      <div>
        <div>Simple React</div>
        <div style={{color:"red"}}>Hello World!</div>
        <div>{1+1}</div>
        {/*for function of a class you must add 'this' keyword. This keyword is an Examples component instance. Otherwise the function will be undefined. */}
        <div>{this.func01()}</div>
        {/*can use func02 function directly because it's declared in the render function. No need to use 'this' keyword */}
        <div>{func02()}</div>
      </div>

    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
