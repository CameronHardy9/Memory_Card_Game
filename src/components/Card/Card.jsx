import "./Card.css";

function Card(props) {
    let arr = [];
    const pairs = [];
    for (let v = 1; v <= (props.amount) / 2; v++) {
        pairs.push(v);
        pairs.push(v);
    }

    for (let i = 0; i < props.amount; i++) {
        let rand = Math.floor(Math.random() * pairs.length);
        arr.push(
            <div
                key={i}
                style={{
                    backgroundColor: "red",
                }}
                className="card"
            >
                <span hidden>{pairs.splice(rand, 1)}</span>
            </div>
        );
    }
    return arr;
}

export default Card;
