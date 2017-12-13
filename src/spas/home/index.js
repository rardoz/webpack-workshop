import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'

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

    getScore(){
        const beers = []
        for(let i = 0; i < this.state.score; i++) {
            beers.push(<span key={i} className="icon icon-beer"/>)
        }
        return beers.length && beers.length > 0 ? beers : 0
    }
    
    getWin(){
        const yays = []
        for(let i = 0; i < 500; i++) {
            yays.push(<h1 key={i}>YAYYYYYYY YOU WIN! YAYYYYYYY YOU WIN! YAYYYYYYY YOU WIN! YAYYYYYYY YOU WIN! YAYYYYYYY YOU WIN!</h1>)
        }
        return yays
    }
    render(){
        return (
            <div>
                <h1 className="no-select">> Hello kitty!</h1>
                <h2 className="no-select">
                    Score: {this.getScore()}
                </h2>
                {
                    this.state.score > 5  ?
                    this.getWin() :
                    <GithubKitty onClick={() => this.onClick()}/>
                }
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))