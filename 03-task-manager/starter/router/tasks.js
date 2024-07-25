const express=require('express');
const router=express.Router();

const {gettasks,posttasks,edittask,getsingle,deletetask}=require("../controller/tasks");

router.route("/").get(gettasks).post(posttasks);
router.route("/:id").get(getsingle).patch(edittask).delete(deletetask);

module.exports=router;