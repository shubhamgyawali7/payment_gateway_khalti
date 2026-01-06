import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handlePayment, lookupPayment } from "./khaltiController.js";

dotenv.config();

const CLIENT = process.env.CLIENT_URL;
const app = express();
app.use(
  cors({
    origin: CLIENT,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/initiate-payment", handlePayment);
app.post("/api/lookup-payment", lookupPayment);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
