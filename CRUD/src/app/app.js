import express from "express";
import morgan from "morgan";
import cors from "cors";
import contactRouter from "../router/contact.routes.js";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Database is working");
});

app.use(express.json());
app.use(cors());
app.use("/api", contactRouter);

export default app;
