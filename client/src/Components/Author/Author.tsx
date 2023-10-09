import "./Author.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/authSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { setBlog } from "../../state/actionSlice";

function Author() {
  const blog = useSelector((state: any) => state.action.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    console.log("click");
    dispatch(setLogout());
  };

  const handlePost = () => {
    navigate("/post");
  };

  return (
    <div className="home">
      <div className="nav">
        <div className="home-logo">
          <p>Haile</p>
        </div>
        <div className="home-btn">
          <button onClick={() => handlePost()}>Post</button>
          <button onClick={() => handleLogout()}>Logout</button>
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

export default Author;
