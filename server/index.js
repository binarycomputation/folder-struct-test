import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is working" });
});

app.listen(6789, () => {
  console.log("server is up and running port=6789");
});
