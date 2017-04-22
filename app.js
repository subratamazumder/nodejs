var express = require('express');

var app = express();
app.set('view engine','ejs');
//routes
app.get('/',function(req,res){
  res.send('hello from express')
});
app.get('/home',function(req,res){
  res.render('home.ejs')
});
app.get('/profile/:name',function(req,res){
  var data = {
    age : 23,
    location : 'UK',
    interests : ['AWS','Spring','NodeJs','API','Micro Services']
  }
  res.render('profile.ejs',{name:req.params.name,profile:data});
});
app.get('/accounts/:id',function(req,res){
  res.send('Outstanding Balanace for account Id-'+req.params.id+' is $1000.00');
});

//listening
app.listen(8080);
