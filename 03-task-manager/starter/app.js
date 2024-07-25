const express=require('express');
const server=express();
const tasks=require("./router/tasks");
require("dotenv").config();
const db = require('./connect/db');
const notfound=require('./middlewares/not-found')
const errorhandler=require('./middlewares/errorhandler')


server.use(express.static("./public"));
server.use(express.json());
server.use(express.urlencoded());
server.use("/api/v1/tasks",tasks);
server.use(notfound);
server.use(errorhandler);

const start= async ()=>{
    try
    {
        await db(process.env.MONGODB_URL);
        server.listen(3000,()=>{
            console.log("server is runnning on port 3000... ");
        })
    }
    catch(error)
    {
        console.log("error h bhai");
    }
}

start();
