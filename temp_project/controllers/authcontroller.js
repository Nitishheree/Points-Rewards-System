import { assignToken } from '../utils/authtoken.js'
import {userRegister,userLogin} from "../services/authServices.js"
import dotenv from 'dotenv'
dotenv.config();


export const userRegis = async(req,res)=>{
    try{
        const userData = req.body;
        
        
        const result = await userRegister(userData);
        
        
        if(result.success){
            const token = assignToken(result.userData)
            console.log(result.message);
            res.cookie('token', token, {
                httpOnly: true,     
                      
                maxAge: 24 * 60 * 60 * 1000 
              });
            
            res.json({
                "success":true,
                message:result.message,
                 
            })
        }
        else{
            res.json(
                {"success":false,
                "message":result.message})
        }
    }
    catch(err){
        console.log("error: ",err.message);
        
    }
}


export const userLog = async(req,res)=>{
    try{
        const userData = req.body;
        
        
        const result = await userLogin(userData)
        
        
        
        if(result.success){
           const {success,message,...userData} = result
        //    console.log("userData",userData);
           
            const {...tokenPayload} = userData
            const token = assignToken(result.userData[0])
            res.cookie('token', token, {
                httpOnly: true,     // helps prevent XSS
                secure: true,       // only over HTTPS
                maxAge: 24 * 60 * 60 * 1000 // 1 day
              });
            
            res.json({
                "success":true,
                message:result.message,
                 
            })
            
        }
        else{
            res.json({
                "success":false,
                "message":result.message
            })
            
        }
        
        
    }
    catch(err){
        console.log("error: ",err.message);
        
    }
}