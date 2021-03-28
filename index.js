const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Connted successfully");
})

app.listen('3000',()=>{
    console.log("connected");
})