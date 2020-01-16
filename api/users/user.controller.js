var {
    create, 
    getUserByUserID,  
    //getUsers, 
    //updateUser, 
    deleteUser,
    getUserByUserEmail
} = require("./user.service");

var { genSaltSync, hashSync, compareSync } = require("bcrypt");  // compareSync will compare the password.
var { sign } = require("jsonwebtoken"); 


module.exports = {    //create module.
    createUser: (req, res) => {    //createUser is a controller.
        var body = req.body;      //variable:body
        var salt = genSaltSync(10);       //encrypt password before saving in the database.
        body.password = hashSync(body.password, salt); // genarate hash encrypted password
        create(body, (err, results) => {        // 2 parameters, err & results.
            if (err) {          //if we have the error.
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUserByUserID: (req, res) => {    //getUserByUserID is a controller.
        var ID = req.params.ID;      //variable:body
       getUserByUserID(ID, (err, results) => {      // 2 parameters, err & results.
            if (err) {          //if we have the error.
                console.log(err);
                return;
            }
            if (!results) {         
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                data: results
            });
        });
    },
   
   getUsers: (req, res) => {   
       getUsers((err, results) => {     
            if (err) {          
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUser: (req, res) => {    
    var body = req.body;      
    var salt = genSaltSync(10);      
    body.password = hashSync(body.password, salt); 
    updateUser(body, (err, results) => {        
        if (err) {        
            console.log(err);
            return; 
            }
        if (!results) {         
            return res.json({
                success: 0,
                message: "Failed to update user."
            });
        }
        return res.json({
            success: 1,
            message:"update successfully"
        });
    });
    },

    

    deleteUser: (req, res) => {    
        var data = req.body;      //variable:
    deleteUser(data, (err, results) => {        
        if (err) {        
            console.log(err);
            return; 
        }
        if (!results) {         
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.json({
            success: 1,
            message:"User deleted successfully"
        });
    });
    },
    login: (req, res) => {
      const body = req.body;
      getUserByUserEmail(body.email, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, "qwe1234", {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    }
};

/* GITHUB
const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser
  } = require("./user.service");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    createUser: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    login: (req, res) => {
      const body = req.body;
      getUserByUserEmail(body.email, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, "qwe1234", {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    },
    getUserByUserId: (req, res) => {
      const id = req.params.id;
      getUserByUserId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getUsers: (req, res) => {
      getUsers((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateUsers: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      updateUser(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    deleteUser: (req, res) => {
      const data = req.body;
      deleteUser(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "user deleted successfully"
        });
      });
    }
  };
*/
