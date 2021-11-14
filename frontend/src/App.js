import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Blog/Posts";
import Post from "./screens/Blog/Post";
import Navbar from "./components/Navbar/Navbar";
import Login from "./screens/Login";
import Create from "./screens/Blog/Create";

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode && "dark"}>
        <Navbar setdarkMode={setdarkMode} darkMode={darkMode} />
        <div className="bg-gray-50 dark:bg-gray-900 pt-2">
          <Route exact path="/" component={Home} />

          <Route exact path="/posts" component={Posts} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/create/post" component={Create} />

          <Route exact path="/adminlogin" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
