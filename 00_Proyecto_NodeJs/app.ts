import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";
import userRouter from "./api/user/routes";
import productRouter from "./api/product/routes";
import cartRouter from "./api/cart/routes";
import jwt from 'jsonwebtoken'; // Added import statement for jwt

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

app.use("/user", userRouter);

const secret = process.env.JWT_SECRET; // Added secret variable

if (!secret) {
  throw new Error('JWT_SECRET is not defined');
}

// Crear un token
const token = jwt.sign({ userId: '12345' }, secret, { expiresIn: '1h' });

// Verificar un token
try {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
} catch (err) {
  console.error('Invalid token', err);
}

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

