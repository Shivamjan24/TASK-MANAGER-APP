const {Customerror}=require('../error/customerror')

const errorhandler = (err,req,res,next)=>{
    if(err instanceof Customerror)
    return res.status(err.statusCode).json({msg:err.message});
    else
    return res.status(500).json({msg:"syntax error"});
}

module.exports=errorhandler;