import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/r.png";
import img from "../../assets/img.png";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="home">
      <div className="nav">
        <div className="home-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-btn">
          <button onClick={() => handleLogin()}>Login</button>
          <button onClick={() => handleSignUp()}>Register</button>
        </div>
      </div>
      <div className="main">
        <div className="landing">
          <img src={img} alt="" />
        </div>
        <div className="landing-text">
          <p>Retink Blog site</p>
        </div>
      </div>
      <div className="blog">
        <div className="blog-title">
          <p>My first blog</p>
        </div>
        <div className="blog-content">
          <p>dsgadsgadgadsbgadgadfgdgdfagadfgdafg</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
