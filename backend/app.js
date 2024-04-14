import sessionRouter from "./routes/session.routes.js";
import planRoutes from "./routes/plans.routes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./db/connection.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.get("/", (req, res) => {
  res.json({ mssg: "GET all user plans" });
});
app.use("/api/session", sessionRouter);
app.use("/api/plans", planRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
