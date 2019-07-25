//import connection
var conn =require("../config/db_connection");

//setting the connection object
var connection=conn.getConnection();

//connect to database
connection.connect();

//import express
var express=require("express");

//create the router
var router=express.Router();

//get request
router.get("/" ,function(req,res){
    connection.query("select * from product", function(err,recordsArray,fields){
        if (err){
            console.log("Error occured while fetching the data !")
        }else{
            res.send(recordsArray);
        }
    });
});
//export the router
module.exports=router;
