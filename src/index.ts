import dotenv from 'dotenv';
import express from 'express';
import { Admin } from './domain/models/Admin';
import { router } from './routes/routes';

dotenv.config();

const app = express();
app.use(express.json());
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