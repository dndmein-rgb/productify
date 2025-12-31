import express from 'express'
import cors from 'cors'
import {ENV} from './config/env'
import { clerkMiddleware } from '@clerk/express';

const app=express();
const PORT=ENV.PORT||3000;

app.use(cors({origin:ENV.FRONTEND_URL}))
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})