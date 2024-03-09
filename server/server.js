// server.js
const express = require("express");
const cors = require("cors");
const guessController = require("./controller/guessController");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/guess", guessController);

app.get("/api/guess", async (req, res) => {
  res.status(200).json("api is workings");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
