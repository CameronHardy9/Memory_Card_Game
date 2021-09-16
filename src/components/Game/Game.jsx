import React from "react";
import Card from "../Card/Card";
import "./Game.css";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
        };
        this.clicks = 0;
        this.flipped = [];
    }
    clickHandler = (e) => {
        this.clicks ++;
        let timeoutID;
        switch (true) {
            case this.clicks === 1:
                this.flipped.push(e.target.firstChild);
                e.target.firstChild.hidden = false;
                break;
            case this.clicks === 2:
                this.flipped.push(e.target.firstChild);
                e.target.firstChild.hidden = false;
                timeoutID = setTimeout(this.matchCheck, 2000);
                break;
            default:
                clearTimeout(timeoutID);
                this.flipped.forEach((i) => {
                    i.hidden = true;
                });
                this.flipped = [];
                this.clicks = 0;
                break;
        }
    };
    matchCheck = () => {
        if(this.flipped[0].id === this.flipped[1].id){
            this.flipped = [];
            this.clicks = 0;
            return;
        } else {
            this.flipped.forEach((i) => {
                i.hidden = true;
            });
            this.flipped = [];
            this.clicks = 0;
        }
    }
    render() {
        return (
            <div onClick={this.clickHandler} className="cardContainer">
                <Card amount={this.state.cards} />
            </div>
        );
    }
}

export default Game;
