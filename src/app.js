require('./config/dotenv')();
require('./config/sequelize');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }

  

const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions))
app.use(routes);



app.listen(port, () => {
    console.log(`${process.env.APP_NAME} app listening at ${process.env.APP_URL}`);
  });