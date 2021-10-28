import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Breadcrum = () => {
  return (
    <div className="my-4 bg-white dark:bg-gray-900 py-7">
      <div className="uppercase tracking-wider text-xxs text-black dark:text-white font-medium flex items-center">
        <Link to="/">
          <h5 className="flex items-center cursor-pointer">
            Home{" "}
            <span className="mx-4">
              <BsArrowRight />
            </span>
          </h5>
        </Link>
        <h5 className="flex items-center">
          Earnings{" "}
          <span className="mx-4">
            <BsArrowRight />
          </span>
        </h5>
        <h5 className="flex items-center">The Journey Towards Finding the Perfect Ice Cream </h5>
      </div>
    </div>
  );
};

export default Breadcrum;
