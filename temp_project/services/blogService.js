import {addBlog,getAllBlogs} from '../models/userModel.js'
import { generateId } from '../utils/idGenerator.js'
export const addNewBlog= async(blogData,user_name)=>{
    try{
        const {blogTitle,blogDescription} = blogData
        const blogFData = 
        {
            blog_id:generateId(),
            blog_title:blogTitle,
            blog_description:blogDescription
        }
        const result = await addBlog(blogFData,user_name)
        if(result.success){
            return{
                "success":true,
                "message": result.message
            }
        }
    }
    catch(err){
        return{
            "message":"publish blog service down"
        }
    }
}
export const getBlogs = async() => {
    try {
        const result = await getAllBlogs();
        if(result.success){
            return {
                "success":true,
                "data":result.blogData
            }
        }

        
    } catch (error) {
        return {"message":error.message}
    }
}