import "./Card.css";

function Card(props) {
    let cardArr = [];
    const pairs = [];
    for (let v = 1; v <= (props.amount) / 2; v++) {
        pairs.push({
            key: v,
            content: `${v}`,
        });
        pairs.push({
            key: v,
            content: `${v}`,
        });
    }

    for (let i = 0; i < props.amount; i++) {
        let rand = Math.floor(Math.random() * pairs.length);
        let [content] = pairs.splice(rand, 1);
        cardArr.push(
            <div
                key={i}
                style={{
                    backgroundColor: "red",
                }}
                className="card"
            >
                <span id={content.key} hidden>{content.content}</span>
            </div>
        );
    }
    return cardArr;
}

export default Card;
