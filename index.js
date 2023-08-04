const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json({}));

const dbUri = process.env.DATABASE_URI;

mongoose
  .connect(dbUri)
  .then(() => console.log("Database connected!😍😍🥰🥰"))
  .catch(err => console.log("Database error 🎇🎇🎇💣💣💣🎇🎇🎇", err.message));

app.get("/", (req, res) => {
  res.send("Hi There!");
});

app.use("/api/v1/auth", userRouter);

const PORT = process.env.PORT || 7007;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
