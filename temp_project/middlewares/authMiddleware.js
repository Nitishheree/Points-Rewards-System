import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const verifyToken = (req,res,next)=>{
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            res.json("no auth found")
        }
        else{
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
            console.log(decoded);
            req.data =  decoded 
            next();
            
            
        }
    } catch (error) {
        return {
            "message":error.message
        }
    }
}