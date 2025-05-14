import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();

export const hashPassword = async(password)=>{
    try{
        const hashedPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUND))
        return hashedPassword;
    }
    catch(err){
        return err.messsage;
    }
}

export const decryptPassword = async(password,hashed_Password)=>{
    try{
        const isPasswordCorrect = await bcrypt.compare(password,hashed_Password)
        
        
        return isPasswordCorrect;
    }
    catch(err){
        return err.messsage;
    }
}