// Library
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Routing For API
const v1 = "/api/itrus";
const authRouter = require("./app/api/auth/router");
const postRouter = require("./app/api/post/router");

// Middleware
const handlerErrorMiddleware = require("./app/middlewares/handler-error");
// Init Express
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.get("/", function (req, res) {
  res.send("Hello world!");
});
//Router For API
app.use(v1, authRouter);
app.use(v1, postRouter);
// Middleware
app.use(handlerErrorMiddleware);

// Initialization For Port
app.listen(9000, () => {
  console.log("app listening on port http://localhost:9000");
});
