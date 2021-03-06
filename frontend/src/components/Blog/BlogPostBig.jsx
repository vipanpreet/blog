import React, { useState } from "react";

const BlogPostBig = ({ post }) => {
  return (
    <div
      // style={{ height: "100%" }}
      className="w-full bg-white relative md:mb-8 mb-3"
    >
      <div className="w-full ">
        <img className=" w-full h-full" src={post.img} alt="photo" />
      </div>
      <div className="absolute md:bottom-0 bottom-10 w-full text-left p-6">
        <p
          style={{ lineHeight: 1.3 }}
          className="text-2xl md:text-5xl cursor-pointer text-white w-full font-semibold capitalize transition-all hover:underline"
        >
          {post.title}
        </p>

        <div className="flex items-center pt-3">
          <span className="text-sm uppercase mr-4 text-white">{post.date}</span>
          <div className="flex items-center justify-between">
            <span className="font-normal text-xs text-white">By.</span>
            <span className="font-normal text-xs whitespace-nowrap text-white">{post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostBig;
