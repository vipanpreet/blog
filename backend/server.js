const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const helmet = require("helmet");

const eventRoutes = require("./routes/eventRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const storageRoutes = require("./routes/storageRoutes");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 8080;

dotenv.config();
connectDB();

app.use(passport.initialize());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

app.use("/api/event", eventRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", storageRoutes);

const listEndpoints = require("express-list-endpoints");
listEndpoints(app).map((aa) => {
  console.log(aa.path, aa.methods);
});
app.listen(PORT, () => console.log(`Server is Up on ${PORT}`));
