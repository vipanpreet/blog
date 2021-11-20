import { useParams } from "react-router";
import UpdatePost from "../../components/admin/UpdatePost";

const DUpdateBlog = () => {
  let { id } = useParams();
  return (
    <div className="container bg-white">
      <UpdatePost id={id} />
    </div>
  );
};

export default DUpdateBlog;
