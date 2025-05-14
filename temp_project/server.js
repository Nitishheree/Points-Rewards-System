import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'

import authRoute from './routes/authRoutes.js'
import blogRoute from './routes/blogRoute.js'
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static("public"))


app.use('/api/user',authRoute)
app.use('/api/blog',blogRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
    
})