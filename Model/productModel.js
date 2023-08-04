const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Product = new  Schema({
    text:{
        type:String, require:true
    }
    
    

})

module.exports=mongoose.model("product", Product)