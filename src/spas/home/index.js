import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'

class HomeSPA extends Component {
    constructor(){
        super()
        this.state = {
            score: 0
        }
    }

    onClick(){
        this.setState({score: this.state.score + 1})
    }

    render(){
        return (
            <div>
                <h1>> Hello kitty!</h1>
                <h2>Score: {this.state.score}</h2>
                <GithubKitty onClick={() => this.onClick()}/>
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))