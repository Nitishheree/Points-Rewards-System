import { v4 as uuidv4 } from 'uuid';
import { generateUsername } from 'unique-username-generator';
export const generateId = () =>{
    try{
        const userId = uuidv4();
        return userId;
    }
    catch(err){
        return err.message;
    }
}

export const generateName = ()=>{
    try{
        const uniqueName = generateUsername();
        return uniqueName;    
    }
    catch(err){
        return err;
    }
}