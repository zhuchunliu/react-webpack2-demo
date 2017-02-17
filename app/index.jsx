// var React = require('react')
// var ReactDOM = require('react-dom')
//
// var Hello = React.createClass({
// 	render: function(){
// 		return(
// 			<h1>hello</h1>
// 		)
// 	}
// })

'use strict'
import React , { Component } from 'react'
import { render } from 'react-dom'

class Hello extends Component {
    constructor(props){
        super(props)
		this.state = {
			say: ''
		}
    }

	_say() {
		this.setState({
			say: "hello world!!!!"+Math.random()
		})
	}

    render() {
        return (
			<div>
				<h1>{ this.state.say }</h1>
				<button onClick={ this._say.bind(this)}> 点我 </button>
			</div>

        )
    }
}

render(<Hello name="liuxian"/> , document.getElementById('root'))
