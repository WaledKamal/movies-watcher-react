import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <>
      <Link to={`watch/${props.data["MovName"]}`} className="Movie">
        <img src={props.data["PosterURL"]} alt={props.data["MovName"]} />
        <div className="Movie-Name">{props.data["MovName"]}</div>
      </Link>
    </>
  );
}
