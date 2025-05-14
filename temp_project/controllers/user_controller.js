import {addNewBlog,getBlogs} from '../services/blogService.js'
export const publish_blog = async(req,res)=>{
try {   
    const blogData = req.body;
    const {user_name} = req.data;
    const result = await addNewBlog(blogData,user_name);
    console.log(result);
    if(result.success){
        res.json (result)
        
        
    }
    

    
} catch (error) {
    res.json({
        "message":error.message
    })
}
}
export const fetchAllBlog = async(req,res)=>{
    try {
        const result = await getBlogs();
        res.json(result)
        
        
    } catch (error) {
        res.json({"message":error.message})
    }
}