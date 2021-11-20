import moment from "moment";
import { Link } from "react-router-dom";
const ListPosts = ({ singlePost }) => {
  return (
    <div className="mt-4 flex md:flex-row flex-col">
      <div className="w-20 h-auto rounded mr-4">
        <img
          className="w-20 h-auto rounded"
          src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2914&q=80"
          alt="Image"
        />
      </div>
      <div className="flex-1 py-2">
        <h2 className="text-xl">{singlePost?.title}</h2>
        <p className="text-gray-500 text-xs">
          {moment(singlePost?.createdAt).format("DD-MM-yyyy")}
        </p>
      </div>
      <div className="p-4 flex items-center">
        <Link to={`/update/post/${singlePost?._id}`}>
          <h3 className="text-xs text-blue-500 underline mr-4">Edit</h3>
        </Link>
        <h3 className="text-xs text-red-500 underline">Remove</h3>
      </div>
    </div>
  );
};

export default ListPosts;
