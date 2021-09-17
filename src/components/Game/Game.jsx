import React from "react";
import Card from "../Card/Card";
import "./Game.css";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardCount: props.cardCount,
            gameStart: false,
            cards: [],
            clicks: 0,
        };
    }
    componentDidMount = () => {
        const cardArr = Card(this.state.cardCount);
        this.setState({clicks: 10})
        this.setState({cards: cardArr});
        console.log("Clicks: ", this.state.clicks)
        console.log("State Cards: ",this.state.cards)
        //this.setState({ gameStart: true });
    };
    // clickHandler = (e) => {
    //     this.setState({ clicks: this.state.clicks++ });
    //     switch (true) {
    //         case this.state.clicks === 1:
    //             this.setState({
    //                 flipped: [
    //                     ...this.state.flipped,
    //                     {
    //                         element: e.target.firstChild,
    //                         key: e.target.firstChild.dataset.key,
    //                     },
    //                 ],
    //             });
    //             e.target.firstChild.hidden = false;
    //             break;
    //         case this.state.clicks === 2:
    //             this.setState({
    //                 flipped: [
    //                     ...this.state.flipped,
    //                     {
    //                         element: e.target.firstChild,
    //                         key: e.target.firstChild.dataset.key,
    //                     },
    //                 ],
    //             });
    //             e.target.firstChild.hidden = false;
    //             setTimeout(this.matchCheck, 1000);
    //             break;
    //         default:
    //             break;
    //     }
    // };
    // matchCheck = () => {
    //     if (
    //         this.state.flipped[0].element.id ===
    //         this.state.flipped[1].element.id
    //     ) {
    //         this.setState({
    //             flipped: [],
    //             clicks: 0,
    //         });
    //         return;
    //     } else {
    //         this.setState(() => {
    //             flipped.forEach((i) => {
    //                 i.element.hidden = true;
    //             });
    //         });
    //         this.setState({
    //             flipped: [],
    //             clicks: 0,
    //         });
    //     }
    // };
    render() {
        return (
            <div>
                {!this.state.gameStart && <h1>Loading...</h1>}
                {this.state.gameStart && (
                    <div onClick={this.clickHandler} className="cardContainer">
                        {this.state.cards}
                    </div>
                )}
            </div>
        );
    }
}

export default Game;
