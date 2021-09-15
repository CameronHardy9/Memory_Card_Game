import React from "react";
import Card from "../Card/Card";
import "./Game.css";


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
        }
    }
    clickHandler = (e) => {
        e.target.firstChild.hidden = false;
    }
    render() {
        return(
            <div onClick={this.clickHandler} className="cardContainer">
                <Card amount={this.state.cards} />
            </div>
        )
    }
}

export default Game;