const express = require("express");
const { connection } = require("./configs/db");
const cors = require("cors");
const {userRouter} = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to olx app");
});

app.use("/users", userRouter);


app.listen(8080, async () => {
  try {
    await connection;
    console.log("conected to DB");
  } catch (err) {
    console.log("Trouble connecting to DB");
    console.log(err);
  }
  console.log("running on port 8080");
});
