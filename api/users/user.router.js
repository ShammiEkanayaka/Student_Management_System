const { 
    createUser,
    getUserByUserID,
    //getUsers,
    //updateUser,
    deleteUser
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/:id", getUserByUserID);
//router.get("/", getUsers);
//router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
