import express from "express";
import dotenv from "dotenv";
import { approutes } from "./Routers/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
const port = process.env.NODE_PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

app.use(bodyParser.json());
app.use("/", approutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("DB connection successfully created!");
  });
});
