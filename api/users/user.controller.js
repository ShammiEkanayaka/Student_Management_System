const {
    create, 
    getUserByUserID,  
    //getUsers, 
    //updateUser, 
    deleteUser
} = require("./user.service");

const {genSaltSync, hashSync} = require("bcrypt");
 
module.exports = {    //create module.
    createUser: (req, res) => {    //createUser is a controller.
        const body = req.body;      //variable:body
        const salt = genSaltSync(10);       //encrypt password before saving in the database.
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
        const ID = req.params.ID;      //variable:body
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
            return res.json({
                success: 1,
                data: results
            });
        });
    },
   
   /*
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
            message:"update successfully"
        });
    });
    },

    */

    deleteUser: (req, res) => {    
        const data = req.body;      //variable:
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
    }
};