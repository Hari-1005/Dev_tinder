import express from "express";
import userRouter from "./routes/userRoutes.js";
import { userAuth } from "./middlewares/userAuth.js";

const app = express();
const PORT = 4000;

app.use((req,res,next)=>{
    console.log("api is hitted", req.path)
    next()
})
app.use('/user', userRouter)
// app.use('/admin')

app.listen(PORT,() => console.log(`server is running at ${PORT}`))