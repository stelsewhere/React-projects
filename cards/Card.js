export default function Card(props) {
    console.log(props)
    let badgeText;
    if (props.places === 0) {
        badgeText = "SOLD OUT"
    }
    return (
        <div className="card">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img
                src={`../images/${props.img}`}
                className="card--image"
            />
            <div className="card--info">
                <div className="card--caption">
                    <img
                        src={`../images/${props.icon}`}
                        className="card--icon"
                    />
                    <span>{ }</span>
                    <a href="{props.link}">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span className="card--date">{props.date}</span>
                <p>{props.description}</p>
            </div>
        </div>
    );
}