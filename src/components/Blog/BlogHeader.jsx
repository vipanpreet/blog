import React from "react";

const BlogHeader = () => {
  return (
    <div className="w-full md:h-96 h-32 bg-primary dark:bg-gray-900 relative">
      <div className="absolute md:w-1/2 header-container w-full px-6">
        <h1 className="font-sans text-3xl text-left md:font-semibold font-normal md:text-6xl capitalize text-white">
          Experience the world moving Towards the future
        </h1>
      </div>
    </div>
  );
};

export default BlogHeader;
