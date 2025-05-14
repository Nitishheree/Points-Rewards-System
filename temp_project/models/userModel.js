import {db} from '../db_config/db.js'

export const addBlog = async(blogData,user_name) => {
    try{
        const {blog_id,blog_title,blog_description} = blogData
        await db.query("INSERT INTO blog_data(blog_id,blog_title,blog_description,user_name) VALUES($1,$2,$3,$4)",[blog_id,blog_title,blog_description,user_name])
        return{
            "success":true,
            "message":"blog added successfully"
        }
    }
    catch(err){
        console.log(err.message);
        return {
            "message":err.message
        }
        
    }
}
export const getAllBlogs = async()=>{
    try{
        const result = await db.query("SELECT blog_id,blog_title,blog_description,user_name from blog_data")
        return{
            "success":true,
            "message":"blog added successfully",
            "blogData": result.rows
        }
    }
    catch(err){
        console.log(err.message);
        return {
            "message":err.message
        }
        
    }
}

export const updatePoints = async(user_name)=>{
    try {
        await db.query("UPDATE user_data SET reward_points = (SELECT COALESCE(SUM(points), 0) FROM blog WHERE blog.user_name = user_data.user_name);")
    } catch (error) {
        return{
            "message":error.message
        }
    }

}