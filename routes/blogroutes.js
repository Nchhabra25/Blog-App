const express=require('express');
const Blogs = require('../models/Blogs');
const router=express.Router() 
//showing all blogs
router.get('/',async (req,res)=>{
    let blogs=await Blogs.find();
    res.render('blogs/index',{blogs})
})
//to add new blog
// router.get('/new', (req,res)=>{
//     res.send('new page')
// })
//to add new blog in db
router.post('/',async (req,res)=>{
    console.log(req.body)
    let {title,img,content,author}=req.body
    await Blogs.create({title,img,content,author})
    res.redirect('/')
})
//update a blog
router.get('/:id/edit',async (req,res)=>{
    let {id}=req.params
    let foundblog=await Blogs.findById(id)
    res.render('blogs/edit',{foundblog})
})
//to show single blog
router.get('/:id',async (req,res)=>{
    let {id}=req.params;
    let foundblog=await Blogs.findById(id)
    res.render('blogs/show',{foundblog})
})


//to edit blog in db
router.patch('/:id',async (req,res)=>{
    let {id}=req.params
    let {title,img,content,author}=req.body
    await Blogs.findByIdAndUpdate(id,{title,img,content,author})
    res.redirect('/')
})
//deleting blog
router.delete('/:id',async(req,res)=>{
    let {id}=req.params
    await Blogs.findByIdAndDelete(id)
    res.redirect('/')
})


module.exports = router;