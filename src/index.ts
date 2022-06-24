import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes/routes';
import mongoose from 'mongoose';
import { createTables } from './database/createTables';
import cors from 'cors';


mongoose.connect("mongodb://localhost:27017/fish_me");
createTables();

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} app listening at ${process.env.APP_URL}`);
  });

app.get('/', (req,res) => {
  res.send("WIIII");
})

/* app.get("/teste", (req, res) => {
  Admin.createCollection().then((collection) => {
    console.log("Collection is created!");
  });
}) */