import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogPostFlex = ({ post, sidebar }) => {
  return (
    <div class="w-full  overflow-hidden flex flex-col md:flex-row mb-8">
      <div class={`w-full md:w-2/5 ${sidebar ? "h-28" : "h-60"}`}>
        <img class="object-center object-cover w-full h-full" src={post.img} alt="photo" />
      </div>
      <div class={`w-full md:w-3/5 text-left ${sidebar ? "p-1 space-y-2" : "p-6"} `}>
        <Link to={`/post/${post._id}`}>
          <p
            class={`text-black dark:text-white capitalize font-semibold ${
              sidebar ? "text-base leading-5" : "text-lg leading-8"
            } cursor-pointer hover:text-primary transition-all hover:underline`}
          >
            {post.title}
          </p>
        </Link>
        {!sidebar && (
          <p class="text-sm mt-3 text-gray-500 dark:text-gray-300 font-normal leading-6 capitalize">
            {post.description.replace(/<[^>]*>?/gm, "").substr(0, 145) + ".."}
          </p>
        )}
        <div className="flex items-center pt-3 dark:text-gray-100">
          <span className="text-xs uppercase mr-4">{post.date}</span>
          {!sidebar && (
            <div className="flex items-center justify-between">
              <span className="font-medium text-xxs">By.</span>
              <span className="font-normal text-xxs whitespace-nowrap">{post.author}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostFlex;
