/*import React, {Component} from 'react';
import {Button }from 'react-bootstrap';

class Click extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Total number of clicks: ',
            counter: 0
        };
    }

    counterButton(){
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return(
            <div>
                <Button variant="info"onClick={() => this.counterButton()}>Click Me</Button>
                <h1>{this.state.message}{this.state.counter}</h1>
            </div>
        )
    }
}



export default Click*/

import React from 'react'
import ReactDOM from 'react-dom'
let left = undefined
let top = undefined

// The event object will be passed to your callback as its first argument.
// You can call it anything, but it doesn't hurt to stick with `event`.
function moveButton(event) {
  left = event.clientX + 1
  top = event.clientY + 1
  renderApp()
}

function renderApp() {
  ReactDOM.render(
    <button
      onMouseMove={moveButton}
      style={{ left, top, position: left ? 'fixed' : 'absolute' }}>
      Hover Me!
    </button>,
    document.getElementById('root')
  )
}

renderApp()