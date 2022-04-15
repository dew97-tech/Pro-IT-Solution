const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Connect to Database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({ message: "This is Modern Ticket System" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
// Error Handling In JSON
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
