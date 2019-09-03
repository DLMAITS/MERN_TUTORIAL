const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

// Create app object
const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// For cross-origin
app.use(cors({ origin: "http://localhost:3000" }));

// Mock route for testing
app.get("/", (req, res) => res.send("API running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Port
const PORT = process.env.PORT || 5000;

// App needs to listen to the server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
