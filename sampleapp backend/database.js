var express = require('express')
var app = express();
var fs=require('fs');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var session=require('express-session');
var mongo=require('mongodb');
let ue=bodyParser.json();



mongoose.connect("mongodb://admin:admin123@ds251112.mlab.com:51112/mydatabase");//connectivity

/*schema for database*/

let addsempSchema=new mongoose.Schema({
  fullname:String,
designation:String,
manager:String
});
let Add1 = mongoose.model("addsemp", addsempSchema);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*Display on console of  insert documents of employees*/
app.get("/Add1",function(req,res){
  Add1.find({},function(err,data){
    console.log(data);
    res.json(data);
  });
});

/*insertion of employee data into database*/
app.post('/addsemp',ue,function(req, res) {
  console.log(req.body);
  Add1(req.body).save(function(err,data){
      res.json(data);
    });
    /*to have a look of single data*/
  /*  var fullname=req.body.fullname;

  Add1.find({fullname:fullname},function(err,data){
    if(err){
      console.log(err);
     return res.status(500).send();
    console.log('error');
    }
    if(!data){
      return res.status(404).send();
      console.log('fail1');
    }

    console.log('success');
    res.send({message:"successful login",
    fullname:req.body.fullname
  });
});*/
  });

/*retrive the data from database into a table format*/

  app.get('/tableview',function(req,res){
    Add1.find({},function(err,data){
   console.log(data);
    res.json(data);
});
});


app.get("/view",function(req,res,next){
Add1.find({"fullname":req.query.fullname},function(err,data){      /*"fullname":req.query.fullname *///to fetch single data
console.log(req.query.fullname);
res.json(data);
});
});
/* retrieve data from database into list format*/
/*app.get("/listview",function(req,res){
Add1.find({fullname:req.query.fullname},function(err,data){
 console.log(data);
  res.json(data);
});
});*/

app.listen(3000);//port number
console.log("server started");
console.log("done");
