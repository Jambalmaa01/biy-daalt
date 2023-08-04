
const jwt=require("jsonwebtoken");
const User=require('../Model/userModel')



exports.postUser=(async(req,res)=>{
     try{
        const user=await User.create(req.body);
        res.status(200).json({
            success:true,
            data:user
        })
       }catch(error){
        res.status(500).json({
            success:false,
            error:error
        })
     }
})

exports.Login=(async(req, res)=>{
    const {email, password}=req.body
   console.log(req.body)

    try{
        const findUser=await User.findOne({email:email})
    if(!findUser){
        return res.status(404).json({
            success:false,
            error:`email ee shlga`
        })
    }

    const check =await findUser.CheckPassword(password)
    console.log('lksjj',password)
    if(!check){
        return res.status(404).json({
            success:false,
            error:`nuuts vg email ee shlga`
        })
    }

    const token =jwt.sign(
        {id:findUser._id, email:findUser.email},
        process.env.JWT_SECRET,
        {
            expiresIn:"1d",
        }
    );
    res.status(200).json({
        success: true,
        findUser,
        token,
      });
    }catch(error){
        res.status(404).json({
            success: false,
            error,
          });
    }
})
   