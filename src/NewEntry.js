import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewEntry = () => {
 

  const [name, setName] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleAdd = () => {
    const entry = { name };

    fetch("http://localhost:8000/heroes/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(entry),
    }).then(() => {
      console.log("Hero added");
      navigate("/heroes");
    });
  };

  return (
    <div className="hero-details">
      <p className="input">
        Hero Name:
        <input
          type="text"
          name="hero-name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <div className="btn">
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewEntry;
