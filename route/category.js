const express=require('express')
const router=express.Router()
const {shield, authorize}=require('../middlewares/authorize')
const {postCategory}=require('../Controller/categoryController')
const {Logger}=require('../middlewares/logger')

router.route('/').post( shield, authorize("admin") ,postCategory)
module.exports=router