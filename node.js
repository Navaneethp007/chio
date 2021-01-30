var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
//var cars = require('cars');
var path = require('path');

var app = express();
 
const port =3000;

//app.use(cars());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
const route = require('./routes/route');

app.use('/api',route)

app.get('/',(req,res)=>{
   res.send('footbar');
});
;

app.listen(port,()=>{
   console.log('server started'+port);


});
