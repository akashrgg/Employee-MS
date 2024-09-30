import mysql from "mysql"
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "employeems",
    port: 3306  
})

con.connect(function(err){
    if(err){
        console.log("err connection")
    }else{
        console.log("connected")
    }
})

export default con;