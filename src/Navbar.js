import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/dashboard");
  };
  const handleClick2 = () => {
    navigate("/heroes");
  };

  return (
    <nav className="navbar">
      <h1>Tour of Heroes</h1>
      <div className="button">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick1}
        >
          Dashboard
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick2}
        >
          Heroes
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
