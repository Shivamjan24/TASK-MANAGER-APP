
class Customerror extends Error
{
    constructor(message, statusCode)
    {
        super(message);
        this.statuCode=statusCode;
    }
}

const createrror=(msg,stat)=>{
    return new Customerror(msg,stat);
}

module.exports={Customerror,createrror}