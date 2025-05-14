import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
export const assignToken = (userData) => {
    try{
        const token = jwt.sign(userData , process.env.JWT_SECRET_KEY);
        return token
    }
    catch(err){
        return err
    }
}