import express from "express";
import sessionRouter from "./routes/session.routes.js";
import planRoutes from "./routes/plans.routes.js";
import cors from "cors";
import Connection from "./db/connection.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/session", sessionRouter);
app.use("/api/plans", planRoutes);

const PORT = process.env.PORT || 8081;
Connection.open()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  });
