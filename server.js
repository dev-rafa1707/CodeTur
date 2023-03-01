
const express = require("express")
const app = express()


app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get("/disney",(req,res)=>{
    res.sendFile(__dirname+"/disney.html")
})

app.get("/dubai",(req,res)=>{
    res.sendFile(__dirname+"/dubai.html")
})

app.get("/fernando",(req,res)=>{
    res.sendFile(__dirname+"/fernando.html")
})

app.get("/machu",(req,res)=>{
    res.sendFile(__dirname+"/machu.html")
})




app.listen(3000,()=>{
    console.log("Servidor executando");
})