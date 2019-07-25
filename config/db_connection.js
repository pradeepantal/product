var mysql = require("mysql");
var db= require("./db_properties");
module.exports={
    getConnection:()=>{
       /* return mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.password,
        databse:db.database
        });*/
	
	var connString = 'mysql://root:abcd@1234@localhost/demo?charset=utf8_general_ci&timezone=-0700';
 
       return  mysql.createConnection(connString);
    }
}
