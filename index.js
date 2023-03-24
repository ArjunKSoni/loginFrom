const express=require("express")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi from login page") 
})

app.listen(3000,()=>{
    console.log("successfully connected")
})