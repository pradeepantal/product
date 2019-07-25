//import express module
var express = require("express");

//import connection moule
var conn= require("../config/db_connection");

//getting the connection object
var connection =conn.getConnection();

//connect to database
connection.connect();

//create the module(Router)
var router = express.Router();
router.post("/",function(req,res){
//reading the parameters from client
    var p_id=req.body.p_id;
    var p_name=req.body.name;
    var p_cost=req.body.cost;
    console.log("insert into product values('"+p_name+"', "+p_cost+")");
    connection.query("insert into product(name,cost) values('"+p_name+"', "+p_cost+")",
        function (err,result){
        if(err){
            console.log("error while inserting the object!"+err)
        }else{
            res.send({insert:"success"});
        }
    });
});
//export router
module.exports=router;
