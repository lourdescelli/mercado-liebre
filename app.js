const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(path.resolve(__dirname), "./public")));

app.listen(PORT, () => console.log("running on port 5001"));

app.get("/", (req,res) => {
    res.sendFile(path.join(path.resolve(__dirname),"views/home.html"))
});

app.get("/login",(req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
    
app.get("/register",(req,res) =>{
res.sendFile(path.resolve(__dirname, "./views/register.html"))
}) ;
    


