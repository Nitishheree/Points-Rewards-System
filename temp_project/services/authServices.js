import {hashPassword,decryptPassword} from '../utils/passEncrypt.js'
import {fetchUserName,addNewUser} from '../models/authModel.js'
import { generateId,generateName } from '../utils/idGenerator.js'


export const userRegister = async(userData)=>{
    try{
        const {user_email,password} = userData
       
        
        
        
        const result = await fetchUserName(user_email);
        if(result.success && result?.userData?.length>0){
            return {
                "success":false,
                "message": "User already exist"
            }
        }
        else{
            const userFData = {
                "user_id":generateId(),
                "user_name": generateName(),
                "user_email": user_email,
                "user_pass":  await hashPassword(password)
            }
            
            
             const addUser = await addNewUser(userFData);
                if(addUser.success){
                    return {
                        "success":true,
                        "message":addUser.message,
                        "userData": {
                            "userId":userFData.user_id,
                            "user_name":userFData.user_name

                        }
                    }
                }
                else{
                    return {
                        "success":false,
                        "message":addUser.message
                    }
                }

            
        }
        
    }
    catch(err){
        return {
            "message":err.message
        }
    }
}


export const userLogin = async(userData) =>{
    try{
        const {user_email,password} = userData
        
        
        const result = await fetchUserName(user_email)
        
        
        if(result.success && result.userData){
            const isPassword_Correct  = await decryptPassword(password,result.userData[0].user_pass)
            if(isPassword_Correct){
                return {
                    "success" : true,
                    "message" :"Logged in Successfully",
                    "userData": result.userData
                }
            }
            else{
                return{
                    "success": false,
                    "message": "Wrong Credentials"
                }
            }
            
        }
    }
    catch(err){
        return {
            "message": err.message
        }
    }
}

