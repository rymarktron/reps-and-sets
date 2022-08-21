const express = require("express");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6666;

app.listen(6000, console.log(`Server started on PORT ${PORT}`))