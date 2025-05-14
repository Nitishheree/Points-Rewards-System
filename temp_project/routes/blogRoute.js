import express from 'express'
import {publish_blog,fetchAllBlog} from '../controllers/user_controller.js'
import {verifyToken} from '../middlewares/authMiddleware.js'
const router  = express.Router();


router.post('/newBlog',verifyToken,publish_blog)
router.get('/getAll',fetchAllBlog);


export default router