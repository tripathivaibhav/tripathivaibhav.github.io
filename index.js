var express = require("express");
var app     = express();
var path    = require("path");

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home_page.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/projects',function(req,res){
  res.sendFile(path.join(__dirname+'/projects.html'));
});

app.get('/blog',function(req,res){
  res.redirect("http://blog.vaibhavtripathi.com");
});

app.get('/contact',function(req,res){
res.sendFile(path.join(__dirname+'/contact.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});