const  express=require('express')
const router=express.Router()
const {postP, deletePro, getP, updatePro}=require('../Controller/productController')
router.route('/').post(postP).get(getP)
router.route('/:id').delete(deletePro).put(updatePro)



module.exports=router