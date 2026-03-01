import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import geminiResponse from "./gemini.js";

const app = express();
app.use(
  cors({
    origin: "https://virtual-assistant-frontend-d49p.onrender.com",
    credentials: true,
  }),
);
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// app.get("/", async (req, res) => {
//   let prompt = req.query.prompt;
//   let data = await geminiResponse(prompt);
//   res.json(data);
// });

app.listen(port, () => {
  connectDB();
  console.log("Server Started!");
});
