import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const HeroesList = ({ Heroes }) => {
  let navigate = useNavigate();
 
  const [name, setName] = useState();
  const { id } = useParams();

  const {
    Data: Heross,
    Pending,
    Error,
  } = useFetch("http://localhost:8000/heroes/" + id);

  const handleNew = () => {
    navigate("/newEntry");
  };

  return (
    <div className="list">
      {Heroes.map((Hero, i) => (
        <div key={i} className="hero-list">
          <Link to={`/heroes/${Hero.id}`}>
            <p className="id">{Hero.id}</p>
            <p className="name">{Hero.name}</p>
          </Link>
        </div>
      ))}
      <div className="new-btn">
        <button className="new-btn" onClick={handleNew}>
          Add New
        </button>
      </div>
    </div>
  );
};
export default HeroesList;
