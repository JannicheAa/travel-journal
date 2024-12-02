export default function Card(props) {
  let location = props.card.location;
  let locationUpperCase = location.toUpperCase();
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img" src={props.card.imageUrl} />
      </div>
      <div className="info-container">
        <div className="first-line">
          <img className="location-icon" src="./location-icon.svg" />
          <p id="location-text" className="location-text">
            {locationUpperCase}
          </p>
          <a href={props.card.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.card.title}</h2>
        <p className="period">
          {props.card.startDate} - {props.card.endDate}
        </p>
        <p className="description">{props.card.description}</p>
      </div>
    </div>
  );
}
