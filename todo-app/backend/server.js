require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let todos = []

app.get("/todos", (req,res)=>{
    res.json(todos)
})

app.post("/todos",(req,res)=>{
    const todo = req.body
    todos.push(todo)
    res.json(todo)
})

app.delete("/todos/:id",(req,res)=>{
    todos.splice(req.params.id,1)
    res.json({message:"deleted"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Server running on port",PORT)
})