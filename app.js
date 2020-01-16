require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());  // convert js objects into json  

app.use("/api/users", userRouter);
const bcrypt = require('bcrypt');


//const PORT = process.env.PORT || 3000;



/*
app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "This is rest api working"
    });
  });
*/
/*
  app.listen(process.env.APP_PORT, () => {
      console.log("Server up and running on port : ", process.env.APP_PORT);
  });
*/

  app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT : ", process.env.APP_PORT);

});