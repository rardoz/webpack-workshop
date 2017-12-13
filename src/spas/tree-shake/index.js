
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {thing} from './works'

class TreeShake extends Component {
    render(){
        return (
            <h1 dataThing={thing}>Tree shaking time!</h1>
        )
    }
}

ReactDOM.render(<TreeShake />, document.getElementById('react-spa'))