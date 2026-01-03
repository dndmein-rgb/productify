import express from 'express'
import cors from 'cors'
import path from 'path'

import { clerkMiddleware } from '@clerk/express';
import { ENV } from './config/env';


import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import commentRoutes from './routes/commentRoutes'



const app=express();
const PORT=ENV.PORT||3000;

app.use(cors({origin:ENV.FRONTEND_URL,credentials:true}))//credentials true allows the frontend to send cookies to the backend so that we can authenticate
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/comments',commentRoutes);


app.get('/api/hello',(req,res)=>{
    res.send("Hello")
})

if (ENV.NODE_ENV === "production") {
  const __dirname = path.resolve();

  // serve static files from frontend/dist
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // handle SPA routing - send all non-API routes to index.html - react app
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})