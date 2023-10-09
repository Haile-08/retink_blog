import { useState } from "react";
import "./Post.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log("s");
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
        </form>
      </div>
    </div>
  );
}

export default Post;
