import { useState } from "react";
import BlogHeader from "../components/Blog/BlogHeader";
import BlogLatest from "../components/Blog/BlogLatest";
import BlogPostFlex from "../components/Blog/BlogPostFlex";
import { BiChevronRight } from "react-icons/bi";
import BlogPostBig from "../components/Blog/BlogPostBig";
const Posts = () => {
  const [posts, setposts] = useState([
    {
      _id: 1,
      img: "https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2914&q=80",
      title: "The Journey Towards Finding the Perfect Ice Cream",
      description: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2> <br/> <br/>
        <h2>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
        </h2>
        <br/>
        <br/>
        <div>
        <img src="https://images.unsplash.com/photo-1592187270271-9a4b84faa228?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80" alt="orange" />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
        </h2>
        `,
      date: "FEBURARY 14 2021",
      author: "Vipanpreet",
    },
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
    <div className="bg-white">
      <BlogHeader />
      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 py-6">
        <div className="flex items-center justify-center w-full md:w-2/12 px-6 -mt-12 dark:text-white">
          <a href="#" className="font-mono uppercase tracking-widest flex items-center">
            Latest stories{" "}
            <span className="pl-2">
              <BiChevronRight />
            </span>
          </a>
        </div>
        <div className="flex-1 -mt-16 z-10 bg-white dark:bg-gray-900 dark:text-white md:px-14 px-6 py-12">
          <BlogLatest />
        </div>
      </div>
      <div className="container-s dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mx-2">
            <BlogPostBig post={posts[3]} />
            <div className="bg-gray-100 dark:bg-gray-900 w-full h-40 mb-8 flex items-center justify-center px-6 leading-8">
              <h2 className="text-lg uppercase font-normal text-center text-gray-700 dark:text-white">
                Sign up for our weekly trips, articles & stories newsletter.
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-2">
            {posts.slice(0, 3).map((post) => (
              <BlogPostFlex post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
