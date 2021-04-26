var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
 
const port =4000;

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
const route = require('./routes/route');
mongoose.connect('mongodb://localhost:27017/models',{ useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log( 'database started');
});
mongoose.connection.on('error',(err)=>{
    if(err){
 console.log(err);
}
     });


app.use('/api',route)

app.get('/',(req,res)=>{
   res.send('footbar');
});
;

app.listen(port,()=>{
   console.log('server started'+port);


});
