const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
const { globalErrorHandler } = require("./middlewares");
const { connectMongo } = require("./db");
const authRouter = require("./routes/api/auth.router");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

connectMongo();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalErrorHandler);

module.exports = app;
