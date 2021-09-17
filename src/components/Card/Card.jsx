import "./Card.css";

function Card(amount) {
    let cardArr = [];
    const pairs = [];
    for (let v = 1; v <= (amount) / 2; v++) {
        pairs.push({
            key: v,
            content: `${v}`,
        });
        pairs.push({
            key: v,
            content: `${v}`,
        });
    }

    for (let i = 0; i < amount; i++) {
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
                <span data-key={i} id={content.key} hidden>{content.content}</span>
            </div>
        );
    }
    console.log("Arr: ",cardArr)
    return cardArr;
}

export default Card;
