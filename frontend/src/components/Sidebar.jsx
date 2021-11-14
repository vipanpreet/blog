import { useState } from "react";
import BlogPostFlex from "./Blog/BlogPostFlex";

const Sidebar = () => {
  const [posts, setposts] = useState([
    {
      _id: 2,
      img: "https://images.unsplash.com/photo-1518927497260-7ac7de6fabf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Brilliant Bicycle Decor for the Home or Garden",
      description:
        "At first I regarded little but the road before me, and then abruptly my attention was arrested by something that was moving",
      date: "FEBURARY 14 2021",
      author: "Vipanpreet",
    },
    {
      _id: 3,
      img: "https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2902&q=80",
      title: "Oranges are filled with nutrition",
      description:
        "At first I regarded little but the road before me, and then abruptly my attention was arrested by something that was moving",
      date: "FEBURARY 14 2021",
      author: "Vipanpreet",
    },
    {
      _id: 4,
      img: "https://images.unsplash.com/photo-1523281865257-87b910862edf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Travel the universe with crypto",
      description:
        "At first I regarded little but the road before me, and then abruptly my attention was arrested by something that was moving",
      date: "FEBURARY 14 2021",
      author: "Vipanpreet",
    },
  ]);
  return (
    <div className="mt-12">
      <div className="bg-gray-100  dark:bg-gray-800 p-6 rounded mb-6">
        <input
          type="text"
          placeholder="Type to search"
          className="border border-solid border-gray-400 outline-none bg-white py-3 px-4 w-full"
        />
      </div>
      <div className="bg-gray-100  dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="text-gray-800 uppercase font-semibold">Popular this week</h3>
        <div className="mt-6">
          {posts.map((post) => (
            <BlogPostFlex post={post} sidebar={true} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100  dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="text-gray-800 uppercase font-semibold">Categories</h3>
        <div className="mt-6">
          <h4 className="font-nomral py-3 tracking-wider border-b border-gray-300  border-solid text-gray-800 dark:text-gray-50">
            Featured (50)
          </h4>
          <h4 className="font-nomral py-3 tracking-wider border-b border-gray-300  border-solid text-gray-800 dark:text-gray-50">
            Gold (45)
          </h4>
          <h4 className="font-nomral py-3 tracking-wider border-b border-gray-300  border-solid text-gray-800 dark:text-gray-50">
            Investment (33)
          </h4>
          <h4 className="font-nomral py-3 tracking-wider border-b border-gray-300  border-solid text-gray-800 dark:text-gray-50">
            Finance (25)
          </h4>
          <h4 className="font-nomral py-3 tracking-wider border-b border-gray-300  border-solid text-gray-800 dark:text-gray-50">
            Others (18)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
