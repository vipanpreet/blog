import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoute from "./config/AdminRoute";

import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import DUpdateBlog from "./screens/Dashboard/DUpdateBlog";
import Alert from "./components/layouts/Alert/Alert";

const Posts = lazy(() => import("./screens/Blog/Posts"));
const Post = lazy(() => import("./screens/Blog/Post"));
const Login = lazy(() => import("./screens/Login"));

const DashboardScreen = lazy(() => import("./screens/Dashboard/DashboardScreen"));
const DListBlog = lazy(() => import("./screens/Dashboard/DListBlog"));
const DListEvent = lazy(() => import("./screens/Dashboard/DListEvent"));
const DCreateBlog = lazy(() => import("./screens/Dashboard/DCreateBlog"));
const DCreateEvent = lazy(() => import("./screens/Dashboard/DCreateEvent"));

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <h5 className="font-black tracking-widest">LOADING</h5>
          </div>
        }
      >
        <div className={darkMode && "dark"}>
          <Navbar setdarkMode={setdarkMode} darkMode={darkMode} />
          <Alert />
          <div className="bg-gray-50 dark:bg-gray-900 pt-2">
            <Routes>
              <Route exact path="/adminlogin" element={<Login />} />
              <Route exact path="/" element={<Home />} />

              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/post/:id" element={<Post />} />
              <Route exact path="/" element={<AdminRoute />}>
                <Route exact path="/dashboard" element={<DashboardScreen />} />
                <Route exact path="/dash/posts" element={<DListBlog />} />
                <Route exact path="/dash/events" element={<DListEvent />} />
                <Route exact path="/create/post" element={<DCreateBlog />} />
                <Route exact path="/update/post/:id" element={<DUpdateBlog />} />
                <Route exact path="/create/event" element={<DCreateEvent />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
