const pool = require("../../config/database");

module.export = {
      
    //---------- insert a record ----------------
    create: (data, callBack) => {
        pool.query(
            `insert into student(Name, Grade ) 
            values(?,?)`,
            [
                data.Name,
                data.Grade,
                data.ID

            ],
            (error, results, fields) =>  {
                if(error) {
                   return callBack(error);
                }
                   return callBack(null, results);

            });
    },
    
    // --------------- select students ------------
   /* getUsers:  callBack => {
        pool.query(
            `select ID,Name,Grade from student`,
            [],
            (error, results, fields) =>  {
                if (error) {
                   return callBack(error);
                }
                   return callBack(null, results);

            });
    },
  

    */



    //---------- Select students by ID ----------------
    getUserByUserID:  (ID, callBack) => {
        pool.query(
            `select ID,Name,Grade from student where ID = ?`,
            [ID],
            (error, results, fields) =>  {
                if (error) {
                   callBack(error);
                }
                   return callBack(null, results[0]);

            });
    },

    //---------- update a record ----------------
    
    /*
    
    updateUser: (data, callBack) => {
        pool.query(
            `update student set Name=?,Grade=? where ID=?`,
            [
                data.Name,
                data.Grade,
                data.ID
            ],
            (error, results, fields) =>  {
                if(error) {
                    callBack(error);
                }
                   return callBack(null, results);

            });
    },


*/

    //---------- delete a record ----------------
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from student where ID=?`,
            [data.ID],
            (error, results, fields) =>  {
                if(error) {
                   return callBack(error);
                }
                   return callBack(null, results[0]);

            });
    }


};