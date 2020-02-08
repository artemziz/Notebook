const router = require('express').Router();
const Note = require('../models/note');
const mongoose = require('mongoose');
router.get('/notes',async (req,res)=>{
    try{
        let notes = await Note.find();
        
        res.send({
            notes:Array.from(notes)
        })

    }catch(e){
        console.log(e);       
    }
})

router.post('/addNote',(req,res)=>{
       
    let note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        body:req.body.body
    })
    note.save((err)=>{
        if(err) return console.log(err);
        console.log('Saving successfully');
        res.redirect('/notes');       
    })
})
router.post('/editNote',(req,res)=>{  

    Note.findByIdAndUpdate(req.body._id,{
            title:req.body.title,
            body:req.body.body
        },(err,note)=>{

            if(err) return console.log(err); 
            res.redirect('/notes');        
        })

})
router.post('/deleteNote',(req,res)=>{
    Note.findByIdAndDelete(req.body._id,(err)=>{
        if(err) return console.log(err);
        console.log('Delete Successfully');  
        res.redirect('/notes');     
    })
})

module.exports = router;