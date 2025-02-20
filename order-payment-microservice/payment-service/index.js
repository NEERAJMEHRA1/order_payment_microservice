
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import database from './src/helper/config/db.js'
import router from './src/payment/index.js'

const app = express();
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(bodyParser.json());

app.use('/payments', router);

const corsOption = {
    origin: "*",
    Credential: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));
app.get("/", (req, res) => {
    console.log("Hello Neeraj");
    res.send("Hello this is testing server.")
});


database;
const PORT = 3001;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));
