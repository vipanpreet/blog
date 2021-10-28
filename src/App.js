import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import Post from "./screens/Post";
import Navbar from "./components/Navbar/Navbar";

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
        </div>
      </div>
    </Router>
  );
}

export default App;
