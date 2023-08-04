const jwt=require('jsonwebtoken')
const MyError=require('../utils/myError')
exports.shield=(async(req, res)=>{
    if(!req.headers.authorization){
        throw new MyError("dcvbnm,.",401)
    }
    const token=req.headers.authorization.split(" ")[1]
    if(!token){
       throw new MyError("nfjkfvkl", 400)
    }
    const object=jwt.verify(token, process.env.JWT_SECRET )
    console.log(object)
    req.userId=object.id;
    req.userRole=object.role
    console.log("oooo",req.userRole)
    
    next()
})

exports.authorize=(...roles)=>{
    return(req, res, next)=>{
        if(!roles.includes(req.userRole)){
            console.log("jksk",req.userRole)
            throw new MyError("tanii erh hvrehgvv bna",403)
        }
     next()
    }
}