import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroDetails = ({}) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const {
    Data: heroes,
    Pending,
    Error,
  } = useFetch("http://localhost:8000/heroes/" + id);
  const [name, setName] = useState("");

  const handleSave = () => {
    fetch("http://localhost:8000/heroes/" + id, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, id }),
    }).then(() => {
      console.log("Hero's name updated");
      navigate(-1);
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    fetch("http://localhost:8000/heroes/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      console.log(`${id} deleted`);
      navigate("/heroes");
    });
  };

  return (
    <div className="hero-details">
      {/* <h2>{heroes.name} Details</h2> */}
      <p>ID: {id}</p>
      <p className="input">
        Hero Name:
        <input
          type="text"
          value={name}
          name="hero-name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <div className="btn">
        <button className="back-btn" onClick={handleBack}>
          Back
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HeroDetails;
