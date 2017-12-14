import Vue, {component, render} from 'vue'
import './styles.scss'

const thing = Vue.component('vue-game', {
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
})

const data =  {
    score: 0
}

const methods = {
    getScore: () => {
        console.log(this)
        return this.score
    },
    getWin: () => {
        return <div></div>
    },
    onClick: () => {}
}

new thing({data, methods}).$mount('#react-spa')