import express from "express";
import dotenv from "dotenv";
import readmeStats from "./api/index";

dotenv.config();
const app = express();

app.use("/api", readmeStats);

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
