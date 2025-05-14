import express from 'express'
import {userRegis,userLog} from '../controllers/authcontroller.js'
import {verifyToken} from '../middlewares/authMiddleware.js'
const router = express.Router();



router.post('/register',userRegis)
router.post('/login',verifyToken,userLog)

export default router