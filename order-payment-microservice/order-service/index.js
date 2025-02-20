
import http from "http";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import database from "./src/helper/config/db.js";
import orderRouter from "./src/order/index.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import swaggerUi from "swagger-ui-express";
const swaggerDoc = require("./swagger.json");

const app = express();
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(bodyParser.json());


//swagger set up
app.use('/order-payment-api', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/orders", orderRouter);

const corsOption = {
    origin: "*",
    Credential: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));

const port = 3000;

app.get("/", (req, res) => {
    console.log("Hello Neeraj");
    res.send("Hello this is testing server.")
});


database;
//server connection
const server = http.createServer(app).listen(port, () => {
    console.log(`Server running for order services : http://localhost:${port}`);
});





