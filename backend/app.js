const express = require("express");
const connectDB = require("./db");
const sessionRouter = require("./routes/session");
const planRoutes = require("./routes/plans");
const cors = require('cors');

const app = express();
connectDB();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use("/api/session", sessionRouter);
app.use("/api/plans", planRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
