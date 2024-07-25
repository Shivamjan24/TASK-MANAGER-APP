const notfound = (req,res)=>{
    return res.status(404).send("no such route avaialable");
}

module.exports=notfound