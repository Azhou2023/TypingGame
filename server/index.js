const express = require("express");
const cors = require("cors");
const config = require("./config");
const router = require("./routes/gameRoutes");
const mongoose = require("mongoose");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", router);

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

server.listen(config.PORT, "0.0.0.0", () => {
  console.log("Server started on PORT " + config.PORT);
});
