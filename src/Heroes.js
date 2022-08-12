import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import HeroesList from "./HeroesList";

const Heroes = () => {
  const {
    Data: Heroes,
    Pending,
    error,
  } = useFetch("http://localhost:8000/heroes");
  return (
    <div className="section1">
      <h2>Top Heroes</h2>

      {Pending && (
        <center>
          <h3>LOADING.......</h3>
        </center>
      )}

      {error && <div> {error} </div>}

      {Heroes && <HeroesList Heroes={Heroes} title="Saviours of the time" />}
    </div>
  );
};

export default Heroes;
