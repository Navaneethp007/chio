const express = require('express');
const router = express.Router();
const studentdetails = require('../models/details');

router.get('/details', (req, res, next)=>{
   studentdetails.find(function(err,get){
   res.json(details);

})
});
router.post('/details',(req,res, next)=>{
    let newstudentdetails= new studentdetails({
        name:req.body.name,
        course:req.body.course,
        age: req.body.age,
        place:req.body.place,
        phno:req.body.phno,
        email:req.body.email
    });
    newstudentdetails.save((err,details)=> {
     if(err){
         res.json({msg: 'failed to add contact'});
         console.log(err);
     }
     else{
         res.json({msg:'detail added'});
     }
    });
    
});
module.exports = router;
