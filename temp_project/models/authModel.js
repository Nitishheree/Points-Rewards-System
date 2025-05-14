import {db} from '../db_config/db.js'

export const addNewUser = async(userData)=>{
    try{
        
        const {user_id, user_name, user_email, user_pass } = userData;
        console.log(userData);
        
        
        
       
       await db.query("INSERT INTO user_data(user_id,user_name,user_email,user_pass,badge) VALUES($1,$2,$3,$4,$5)",[user_id,user_name,user_email,user_pass,'pro'])
       return{
        "success":true,
        "message": "user Registered Successfully"
       }
    }
    catch(err){
        console.log("error from db",err.message);
        
        
        
        return {"success":false,"message": err.message}
    }
}

export const fetchUserName = async(user_email)=>{
    try{
        

        const result  = await db.query("SELECT user_id,user_pass,user_name from user_data WHERE user_email = $1",[user_email])
        if(result.rows.length>0){
            return {
                "success":true,
                "userData":result.rows
            }
        }
        else{
            return{
                "success":false,
                "userData":null
            }
        }

    }
    catch(err){
        return {"error":err.message}
    }
}



