const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./app/routes/note_routes');
const mongoose = require('mongoose');
const db = require('./config/db');
const app = express();
const PORT = 8000;
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
};

mongoose.connect(db.url,connectParams,(err)=>{
    if(err) return console.log(err);
    console.log('Connect success');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/',noteRoutes);

    app.get('*',(req,res)=>{
        res.redirect('/notes');
    })
    app.listen(PORT,()=>{
        console.log(`Server starts on ${PORT}`);       
    })
})
        

    









