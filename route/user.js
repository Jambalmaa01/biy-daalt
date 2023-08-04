const  express=require('express')
const router=express.Router()
const {postUser, Login}=require('../Controller/userController')
router.route('/').post(postUser)
router.route('/login').post(Login)


module.exports=router