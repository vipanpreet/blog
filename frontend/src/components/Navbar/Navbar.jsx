import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import isEmpty from "lodash/isEmpty";

const Navbar = ({ setdarkMode, darkMode }) => {
  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;
  return (
    <div className="w-full h-20 border-solid border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-6">
      <ul className="h-full flex md:justify-end justify-center items-center list-none dark:text-white">
        <Link to="/">
          <li className="mx-4">Home</li>
        </Link>
        <Link to="/posts">
          <li className="mx-4">Blog</li>
        </Link>
        {isEmpty(userInfo) ? null : (
          <Link to="/dashboard">
            <li className="mx-4">Dashboard</li>
          </Link>
        )}
        {/* <Link to="/post/1">
          <li className="mx-4">Post</li>
        </Link> */}

        {darkMode ? (
          <li className="cursor-pointer" onClick={() => setdarkMode(false)}>
            <HiOutlineSun />
          </li>
        ) : (
          <li className="cursor-pointer" onClick={() => setdarkMode(true)}>
            <HiOutlineMoon />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
