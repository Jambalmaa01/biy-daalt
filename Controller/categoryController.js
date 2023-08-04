const Category =require('../Model/categoryModel')


exports.postCategory=(async(req, res)=>{
    const cate=await Category.create(req.body)
    res.status(200).json({
        success:true,
        cate
    })
})