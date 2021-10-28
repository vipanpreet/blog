import React, { useEffect } from "react";
import Single from "../components/Blog/Single";

const Post = ({ match }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Single />
    </div>
  );
};

export default Post;
