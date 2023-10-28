const mongoose=require('mongoose')
let blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    img:{
        type:String,
        trim:true,
    },
    author:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
        trim:true,
    }
})
let Blogs=mongoose.model('Blogs',blogschema);
module.exports=Blogs;