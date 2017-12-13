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
        this.points = 0
    }

    onClick(){
        this.points += 1
        this.setState({score: this.points})
    }

    render(){
        return (
            <div>
                <h1 className="no-select">> Hello kitty!</h1>
                <h2 className="no-select">Score: {this.state.score}</h2>
                <GithubKitty onClick={() => this.onClick()}/>
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))