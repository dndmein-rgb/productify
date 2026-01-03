import express from 'express'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express';
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import commentRoutes from './routes/commentRoutes'
import { ENV } from './config/env';


const app=express();
const PORT=ENV.PORT||3000;

app.use(cors({origin:ENV.FRONTEND_URL,credentials:true}))//credentials true allows the frontend to send cookies to the backend so that we can authenticateapp.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/comments',commentRoutes);


app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})