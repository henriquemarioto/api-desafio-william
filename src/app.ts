import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import errorHandling from "./middlewares/errorHandling.middleware";
import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandling);

export default app;
