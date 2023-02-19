const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
const { globalErrorHandler } = require("./middlewares");
const { createHttpException } = require("./helpers");
const { connectMongo } = require("./db");
const authRouter = require("./routes/api/auth.router");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

connectMongo();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

// app.use(createHttpException);
// app.use(globalErrorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.use(createHttpException);
app.use(globalErrorHandler);

module.exports = app;
