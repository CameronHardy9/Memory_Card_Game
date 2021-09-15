import React from "react";
import Card from "../Card/Card";
import Game from "../Game/Game"
import "./StartPrompt.css"

class StartPrompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameStart: false,
        }
        this.cards = "6";
    }
    changeHandler = (e) => {
        this.cards = e.target.value
    }
    clickHandler = () => {
        this.setState({gameStart: true})
    }
    render() {
        let display;
        if (this.state.gameStart) {
            display = (
            <div className="gameContainer">
                <Game cards={this.cards}/>
            </div>
            )
        } else {
            display = (
                <div className="startPrompt">
                    <label htmlFor="diff">Select your difficulty:</label>
                    <select onChange={this.changeHandler} name="diff" id="diff">
                        <option value="6">Easy</option>
                        <option value="12">Medium</option>
                        <option value="24">Hard</option>
                    </select>
                    <button onClick={this.clickHandler}>Start</button>
                </div>
            )
        }
        return(
            <div>{display}</div>
        )
    }
}

export default StartPrompt;