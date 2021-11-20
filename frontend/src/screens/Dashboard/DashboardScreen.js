import React from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  return (
    <div className="bg-white container">
      <div className="w-full h-64 border-b border-solid border-gray-200 flex items-center justify-center">
        <Link to="/dash/posts">
          <button className="btn-primary mr-4">Manage Posts</button>
        </Link>
        <Link to="/dash/events">
          <button className="btn-green">Manage Events</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardScreen;
