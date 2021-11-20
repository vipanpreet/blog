import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListPosts from "../../components/admin/ListPosts";
import { getPosts } from "../../redux/posts/postsAction";
import { GET_POST_RESET } from "../../redux/posts/postsTypes";

const DListBlog = () => {
  const dispatch = useDispatch();

  const postsState = useSelector((state) => state.postsState);
  const { posts } = postsState;

  useEffect(() => {
    dispatch(getPosts());
    dispatch({ type: GET_POST_RESET });
  }, [dispatch]);

  return (
    <div className="bg-white container">
      <div className="p-3 border-b border-solid border-gray-200">
        <Link to="/create/post">
          <button className="btn-primary">Create new</button>
        </Link>
      </div>
      <div className="mt-4">
        {posts?.map((singlePost) => (
          <ListPosts singlePost={singlePost} />
        ))}
      </div>
    </div>
  );
};

export default DListBlog;
