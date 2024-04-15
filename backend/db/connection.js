import mongoose from "mongoose";
import dotenv from "dotenv";

let connection;

class Connection {
  static async open() {
    if (!connection) {
      try {
        dotenv.config();
        await mongoose.connect(process.env.MONG_URI);
        connection = mongoose.connection;
        mongoose.connection
          .on("open", () => console.log("DATABASE STATE", "Connection Open"))
          .on("close", () => console.log("DATABASE STATE", "Connection Closed"))
          .on("error", (error) => console.error("DATABASE STATE", error));
        console.log("MongoDB connected...");
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
    } else {
      return connection;
    }
  }

  static async close() {
    await connection.close();
    mongoose.connection
      .on("open", () => console.log("DATABASE STATE", "Connection Open"))
      .on("close", () => console.log("DATABASE STATE", "Connection Closed"))
      .on("error", (error) => console.error("DATABASE STATE", error));
  }
}

export default Connection;
