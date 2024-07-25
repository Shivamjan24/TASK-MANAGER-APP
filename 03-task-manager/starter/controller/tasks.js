const Tasks=require("../models/tasks");
const asyncwrap=require('../middlewares/asyncwrapper')
const {createrror}=require("../error/customerror")

const gettasks=asyncwrap( async (req,res)=>{
    const tasks=await Tasks.find({});
    res.status(200).json(tasks);
})

const posttasks=asyncwrap( async (req,res)=>{
    const task= await Tasks.create(req.body);
    res.status(201).json();
})

const edittask=asyncwrap( async (req,res,next)=>{
    const {id:taskid}=req.params;
    const task=await Tasks.findOneAndUpdate({_id:taskid},req.body,{
        new:true,
        runValidators:true
    })
    if(!task)
    return next(createrror("unable to find the resource",404));
    else
    return res.status(200).json({task});
})

const getsingle=asyncwrap( async(req,res,next)=>{
    const {id:taskid}=req.params;
        const task=await Tasks.findOne({_id:taskid})
    if(!task)
    return next(createrror("unable to find the resource",404));
    return res.status(200).json({task});
})

const deletetask=asyncwrap( async(req,res,next)=>{
    const {id:taskid}=req.params;
    const task=await Tasks.findOneAndDelete({_id:taskid})
    if(!task)
    return next(createrror("unable to find the resource",404));
    return res.status(200).json();
})

module.exports={gettasks,posttasks,edittask,getsingle,deletetask};