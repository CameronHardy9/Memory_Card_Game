import "./App.css";
import React from "react";
import StartPrompt from "./components/StartPrompt/StartPrompt.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: false,
        };
    }
    clickHandler = (e) => {
        this.setState({begin: true})
    }
    render() {
        let display;
        if (this.state.begin){
            display = <StartPrompt />
        } else {
            display = (
                <div className="App">
                    <h1>Memory Card Game</h1>
                    <button onClick={this.clickHandler}>Begin</button>
                </div>
            )
        }
        return(
            <div>
                {display}
            </div>
        )
    }
}

export default App;
