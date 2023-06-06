import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import Data from "./models/Data.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/getdata", async (req, res) => {
  const data = await Data.find();
  res.status(200).json(data);
});

app.get("/", async (req, res) => {
  const response = await fetch("https://api.wazirx.com/api/v2/tickers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const totalData = await response.json();
  const requiredData = Object.values(
    Object.fromEntries(Object.entries(totalData).slice(0, 10))
  );
  await Data.deleteMany({});
  await Data.insertMany(requiredData);
  res.send(requiredData);
});

// Mongoose Setup
const PORT = 3001;
const URL = "mongodb://localhost:27017/cryptodb";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server up at port ${PORT}`);
    })
  )
  .catch((err) => console.log(`${err} : could not connect to DB`));
