import "./Home.css";
import logo from "../../assets/r.png";
import img from "../../assets/img.png";

function Home() {
  return (
    <div className="home">
      <div className="nav">
        <div className="home-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-btn">
          <button>Login</button>
          <button>Register</button>
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
