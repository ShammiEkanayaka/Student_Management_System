require("dotenv").config();
var express = require('express');
var app = express();
var userRouter = require("./api/users/user.router");

app.use(express.json());  // *convert the js objects into json objects.* 

app.use("/api/users", userRouter);
var bcrypt = require('bcrypt');
//var PORT = process.env.PORT || 3000;   // *Not necessary to run PORT.* 

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);

  /*
app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "This is rest api working"
    });
  });
*/
});



/* FROM
require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});



*/
