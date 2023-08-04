const Product=require('../Model/productModel')

exports.postP=(async(req, res)=>{
    const pro=await Product.create(req.body)
    res.status(200).json({
        success:true,
        pro
    })
})
exports.getP=async(req, res)=>{
    const pro=await Product.find()
    res.status(200).json({
        success:true,
        pro
    })
}

exports.deletePro=(async(req,res, next)=>{
    
       const pId=req.params.id
       const proId=await Product.findByIdAndDelete(pId )
       res.status(200).json({
          success: true,
          proId,
          message:"jkajka"
      })
  })


  exports.updatePro = (async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndUpdate(productId, req.body, {new: true});
  
      if (!product) {
        return res.status(404).json({ success: false, message: ' bvteegdehvvn oldsongvv' });
      }
  
      res.status(200).json({ success: true, product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'amjilttgvv.' });
    }
  });
  