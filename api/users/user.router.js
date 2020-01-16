var { 
    createUser,
    login,
    getUserByUserID,
    //getUsers,
    //updateUser,
    deleteUser
    
} = require("./user.controller");
var router = require("express").Router();
var { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserID);
//router.get("/", checkToken, getUsers);
//router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);


module.exports = router;


/* From 
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
*/
