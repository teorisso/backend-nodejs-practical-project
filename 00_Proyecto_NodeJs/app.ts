import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
