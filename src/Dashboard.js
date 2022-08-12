import { Link } from "react-router-dom";
import heroes from "./data/data.json";
import React from "react";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Top Heroes</h2>
<div className="top-heroes">
      {heroes &&
        heroes.heroes.map((hero, i) => {
          return hero.id <= 4 ? (
            <Link key={i} to={`/heroes/${hero.id}`}>
              <div className="top-heroes-1">
                <h3>{hero.name}</h3>
        
              </div>
            </Link>
          ) : (
            <React.Fragment key={i}></React.Fragment>
          );
        })}
        </div>
    </div>
  );
};

export default Dashboard;
