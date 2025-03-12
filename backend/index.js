import express from "express";
import dotenv from "dotenv";
 dotenv.config();
import path from "path";
import {getRouter} from './Router/getRouters.js';
import connect  from "./lib/mongodb.js" ;
import postRouter from "./Router/postRouters.js";
import deleteRouters from "./Router/deleteRouters.js";
import authRouter from "./Router/authRouters.js";

const app=express();
const port=process.env.PORT


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({"message":"this is a home page"})
})
app.use(getRouter);
app.use(postRouter);
app.use(deleteRouters);
app.use(authRouter);

app.listen(port,()=>{
    console.log(`server is listening port  ${port}`);
    connect();
    
})
