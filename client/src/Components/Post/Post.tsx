import { useState } from "react";
import "./Post.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../state/actionSlice";

function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const user = useSelector((state: any) => state.auth.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    console.log(token);
    console.log(title);
    console.log(content);
    console.log(user);
    e.preventDefault();
    axios
      .post("http://localhost:4547/Blog/post", {
        token: token,
        title: title,
        content: content,
        author: user?.firstName,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData);
        dispatch(
          setBlog({
            blog: resData?.data.Blogs,
          })
        );
        navigate("/author");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="post">
      <div className="post-t">
        <p>Create a Post</p>
      </div>
      <div className="post-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill theme="snow" onChange={setContent} className="q" />
          <button type="submit" className="submit">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
