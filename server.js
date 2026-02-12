//Create express server 
const express=require('express')
const app=express()
//Parcing the body so the server can understand the json
const bodyParser=require('body-parser')

//Body parser converts incoming request data into a usable JavaScript object.
app.use(bodyParser.json())

app.get("/",(req,res)=>{res.send("hello")})

app.post("/api/cars",(req,res)=>{
    const {name,brand}=req.body
    console.log(name);
    console.log(brand);
    
   res.send("cars successfully submited");
    
})

app.listen(4000,()=>{console.log("hello am listeming on the port 4000");
})
//Connect Database 
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDataBase')
.then(() => {console.log('Database connected')}).catch((error)=>{console.log("Database connection error:", error.message);
})
