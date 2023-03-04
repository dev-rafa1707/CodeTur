
const express = require("express")
const app = express()

app.use(express.static("imagens"))

app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get("/disney",(req,res)=>{
    res.sendFile(__dirname+"/disney.html")
})

app.get("/dubai",(req,res)=>{
    res.sendFile(__dirname+"/dubai.html")
})

app.get("/natal",(req,res)=>{
    res.sendFile(__dirname+"/natal.html")
})

app.get("/machu",(req,res)=>{
    res.sendFile(__dirname+"/machu.html")
})

app.get("/sobre",(req,res)=>{
    res.sendFile(__dirname+"/sobre.html")
})


app.listen(3000,()=>{
    console.log("Servidor executando");
})