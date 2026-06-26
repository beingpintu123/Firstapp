const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();



app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pintu@123",
  database: "login_app",
});

db.connect((err) => {
  if (err) {
    console.log("DB Error :", err);
  } else {
    console.log("MySQL Connected ho gaya hai");
  }
});
//signup api
app.post("/signup",(req,res)=>{
  const {name, email,password}=req.body;
  const sql="insert into users(name,email,password) value(?,?,?)"
  db.query(sql,[name,email,password],(err,result)=>{
    if(err){
      return
      res.status(500).json(err);
    }
    if(result.affectedRows){
      res.json({message:"signup success"})
    }
    else{
      res.status(401).json({message:"not"})
    }
  })
  
})


// Login API 

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json(err); 

    }

    if (result.length > 0) {
      res.json({ message: "Login Success" });

    } 
    else {
      res.status(401).json({ message: "data not found" });
    }
    
  });
});

app.listen(5000, () => 
  console.log("Server running on port 5000"));