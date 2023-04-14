import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT || 5500;
const app = express();
app.use(cors());
app.use(router);
db().then(() => console.log("DB connected"));
app.listen (PORT, () => console.log(`Listo por el puerto ${PORT}`))
