import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/r.png";
import img from "../../assets/img.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setBlog } from "../../state/actionSlice";

function Home() {
  const blog = useSelector((state: any) => state.action.blogs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4545/Blog/get")
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data.Blogs);
        dispatch(
          setBlog({
            blog: resData?.data.Blogs,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

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
      {blog?.map((i: any) => {
        return (
          <div className="blog">
            <div className="blog-title">
              <p>{i.title}</p>
            </div>
            <div className="blog-content">
              <p>{i.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
