const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res)=>{
    res.send("Hello world, Node is working")
})






app.listen(PORT);
