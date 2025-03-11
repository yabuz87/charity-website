import express from "express";
import dotenv from "dotenv";
 dotenv.config();
import path from "path";
import {getRouter} from './Router/getRouters.js';
import connect  from "./lib/mongodb.js" ;

const app=express();
const port=process.env.PORT || 3500


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({"message":"this is a home page"})
})
app.use(getRouter);

app.listen(port,()=>{
    console.log(`server is listening port  ${port}`);
    // to do 
    connect();
    // you connect your mongodb here by calling the method from the model or lib file
})
