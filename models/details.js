const mongoose= require('mongoose');
const Studentdata = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const  studentdetails = module.exports = mongoose.model('studentdetails',Studentdata);