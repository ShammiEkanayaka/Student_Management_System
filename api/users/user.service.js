var pool = require("../../config/database");

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

      getUsers:  callBack => {
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
    },
    
//---------- get student by student Grade ----------------

  getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results[0]);
                }
        );
    },
};






/* GITHUB
const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
*/



