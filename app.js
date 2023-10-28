const express=require('express')
const app=express()
const path=require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const seedDB=require('./seed');
const blogroutes=require('./routes/blogroutes')
mongoose.set('strictQuery',true);   
mongoose.connect('mongodb://127.0.0.1:27017/blogdb') 
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log("error in connecting",err)});

// app.get('/',(req,res)=>{
//     res.send('server connected')
// })

app.set('view engine','ejs') 
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public'))) 
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method')) 

app.use(blogroutes)
// seedDB()   

const port=5050;

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})