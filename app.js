const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {register} = require('../express-jwt/Controller/authController');
const {login} = require('../express-jwt/Controller/authController');
const {me} = require('../express-jwt/Controller/authController');

const app = express();
app.use(cors())

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

const authRoute = require('./routes/route');
app.use("/api/auth", authRoute);